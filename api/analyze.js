export default async function handler(req, res) {
  // ==========================================
  // إعدادات الاتصال
  // ==========================================
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text, question, responseLanguage } = req.body || {};

  // ==========================================
  // التحقق من النص
  // ==========================================
  if (typeof text !== "string" || text.trim().length < 5) {
    return res.status(400).json({ error: "الرجاء إدخال نص صالح (5 أحرف على الأقل)." });
  }

  const cleanText = text.trim();
  const cleanQuestion = typeof question === "string" ? question.trim() : "";

  // ==========================================
  // مفتاح Groq
  // ==========================================
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "إعداد الخادم غير مكتمل. المفتاح غير موجود." });
  }

  // ==========================================
  // تعليمات اللغة
  // ==========================================
  const languageInstruction = `
IMPORTANT LANGUAGE RULES:

1. Automatically detect the actual language of the user's input text.
2. Write the entire analysis in the same language as the original input.
3. Never choose the output language based on the website interface language.
4. Never choose the output language based on the browser language.
5. If the text is Arabic, respond in Arabic.
6. If the text is English, respond in English.
7. If the text is French, respond in French.
8. If the text is German, respond in German.
9. Support other languages whenever possible.
10. Preserve original quotations exactly as written in the input.
11. Explain quotations in the detected language.
12. All JSON field values must use the detected language.
13. JSON property names must remain exactly as specified in the schema.
14. Do not translate the original quoted phrases.
15. The requested response language is:
${responseLanguage === "same_as_input" ? "THE SAME LANGUAGE AS THE ORIGINAL INPUT TEXT" : "AUTOMATICALLY DETECTED FROM THE ORIGINAL INPUT TEXT"}.
`;

  // ==========================================
  // تعليمات التحليل (تم حذف اللهجة)
  // ==========================================
  const systemPrompt = `
You are an expert in forensic linguistics, psycholinguistics, communication patterns, and behavioral language analysis.

Your task is to analyze the provided text carefully, accurately, and objectively.

${languageInstruction}

STRICT ANALYSIS REQUIREMENTS:

Analyze the actual words and expressions in the text.
Do not invent evidence.
Do not assume hidden intentions without textual evidence.
Distinguish between possible interpretations and clear linguistic signals.
Do not diagnose the author.
Do not label a person as a liar or manipulator.
Analyze the text, not the person's identity.

ANALYSIS CATEGORIES:

1. General tone: Describe the overall tone precisely.
2. Confidence signals: Extract exact quotations indicating confidence, certainty, or assertiveness.
3. Hedging signals: Extract exact quotations indicating uncertainty, avoidance, hesitation, or qualification.
4. Emotional markers: Identify exact words or phrases indicating emotions such as anger, anxiety, sadness, affection, or detachment.
5. Potential manipulation patterns: Identify possible patterns such as guilt-tripping, blame shifting, emotional pressure, gaslighting indicators, threatening language, deflection, excessive control, emotional blackmail. Only identify a pattern when the actual text supports it.
6. Summary: Write a detailed summary of approximately 4 to 5 sentences.
7. Answer: If the user asks a question, answer it using the same language as the original input text. If no question is provided, return null.

STRICT OUTPUT FORMAT:

Return valid JSON only. Do not use Markdown. Do not include code fences.

Use exactly this JSON structure:
{
  "tone": "Detailed description of the overall tone",
  "confidence_signals": ["Exact quotation and explanation"],
  "hedging_signals": ["Exact quotation and explanation"],
  "emotional_markers": ["Exact quotation and emotion explanation"],
  "manipulation_patterns": [
    {
      "phrase": "Exact quotation from the input",
      "pattern": "Pattern name",
      "why": "Detailed explanation"
    }
  ],
  "summary": "A detailed summary",
  "answer": null
}

ADDITIONAL RULES:
- Do not output percentages.
- Do not claim that someone is definitely lying.
- Do not invent quotations.
- Be specific and evidence-based.
- Keep the JSON property names in English.
- Translate all descriptive values into the detected input language.
`;

  const userPrompt = `
Analyze the following message.

Original message:
${cleanText}

${cleanQuestion ? `User's question:\n${cleanQuestion}\n\nAnswer the question in the same language as the original message. Put the answer in the JSON field named "answer".` : `No question was provided. Set the JSON field "answer" to null.`}

Remember: The original message determines the output language.
`;

  // ==========================================
  // الاتصال بـ Groq
  // ==========================================
  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        temperature: 0.3,
        max_tokens: 2048,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    if (!groqRes.ok) {
      const errorDetails = await groqRes.text();
      console.error("Groq Error:", errorDetails);
      return res.status(502).json({ error: "حدث خطأ أثناء تنفيذ التحليل. يرجى المحاولة مرة أخرى." });
    }

    const data = await groqRes.json();
    let content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("لم يتم استلام نتيجة من نموذج التحليل.");
    }

    content = content.trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
    const result = JSON.parse(content);

    // ==========================================
    // التحقق من بنية النتيجة (بدون لهجة)
    // ==========================================
    const finalResult = {
      tone: String(result.tone || ""),
      confidence_signals: Array.isArray(result.confidence_signals) ? result.confidence_signals : [],
      hedging_signals: Array.isArray(result.hedging_signals) ? result.hedging_signals : [],
      emotional_markers: Array.isArray(result.emotional_markers) ? result.emotional_markers : [],
      manipulation_patterns: Array.isArray(result.manipulation_patterns)
        ? result.manipulation_patterns.map(pattern => ({
            phrase: String(pattern.phrase || ""),
            pattern: String(pattern.pattern || ""),
            why: String(pattern.why || "")
          }))
        : [],
      summary: String(result.summary || ""),
      answer: result.answer === null || result.answer === undefined ? null : String(result.answer)
    };

    return res.status(200).json(finalResult);

  } catch (err) {
    console.error("Analysis Error:", err);
    return res.status(500).json({ error: "حدث خطأ أثناء معالجة التحليل. يرجى المحاولة مرة أخرى." });
  }
  }

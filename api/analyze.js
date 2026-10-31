export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { text, question } = req.body || {};
  
  if (!text || text.trim().length < 5) {
    return res.status(400).json({ error: "الرجاء إدخال نص صالح (5 أحرف على الأقل)." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "إعداد الخادم غير مكتمل. المفتاح غير موجود." });
  }

  // التعليمات المحدثة: تحليل عميق، اكتشاف لهجة، واستخراج اقتباسات
  const systemPrompt = `أنت خبير عالمي في علم النفس اللغوي (Forensic Linguistics) وتحليل السلوك، ومتخصص في اللهجات العربية. مهمتك تقديم تحليل عميق، دقيق، ومفصل للنص المرفق.

قاعدة لغوية صارمة: يجب أن تكون جميع الإجابات (بما فيها الاقتباسات) بنفس لغة النص المُدخل. إذا كان النص عربياً، أجب بالعربية، وإذا كان إنجليزياً، أجب بالإنجليزية.

حلّل النص وأعد النتيجة بصيغة JSON فقط بهذا الشكل:
{
  "dialect": "اكتشف اللهجة بدقة بناءً على المفردات العامية (مثال: يمنية صنعانية، سعودية نجدية، مصرية، شامية، خليجية، فصحى). إذا كان النص إنجليزياً، حدد إذا كان أمريكياً أو بريطانياً.",
  "tone": "وصف دقيق وشامل للنبرة العامة (مثال: دفاعي مصحوب بعدائية مبطنة، أو مهذب لكنه متحفظ).",
  "confidence_signals": [
    "استخرج الاقتباسات الحرفية التي تدل على الثقة، ثم اشرح في سطر واحد لماذا تدل عليها."
  ],
  "hedging_signals": [
    "استخرج الاقتباسات الحرفية التي تدل على التهرب أو التخفيف (مثل: سأحاول، ربما، لاحقاً)، واشرح لماذا."
  ],
  "emotional_markers": [
    "استخرج الكلمات الحرفية التي تكشف الحالة العاطفية (غضب، قلق، برود)، مع ذكر العاطفة التي تدل عليها."
  ],
  "manipulation_patterns": [
    {
      "phrase": "الاقتباس الحرفي من النص", 
      "pattern": "نوع التلاعب (مثال: إلزام بالذنب، تشتيت، جعل الضحية هو المخطئ)", 
      "why": "شرح تحليلي دقيق يوضح كيف حاول المتحدث السيطرة أو التأثير نفسياً."
    }
  ],
  "summary": "تقرير نهائي من 4 إلى 5 أسطر يلخص الديناميكية النفسية والهدف الخفي للرسالة.",
  "answer": "إجابة السؤال هنا (إن وجد) بناءً على التحليل، أو null"
}

${question ? `المستخدم يسأل: "${question}". أجب عليه بذكاء وإسهاب في حقل "answer" بناءً على التحليل.` : 'اجعل "answer" null.'}

قواعد صارمة أخرى:
- كن دقيقاً جداً في تحديد اللهجة بناءً على الكلمات العامية (مثل: وش، عاد، شلون، إيه، شو).
- لا تُخرج أي نسبة مئوية (لا تقل 80% كذب).
- لا تصف الشخص بأنه "كاذب"، بل صف "النص".
- لا تكرر الكلام العام، كن محدداً جداً واستشهد بالكلمات.
- أعد JSON صالحاً فقط.`;

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // النموذج الأذكى
        temperature: 0.3,
        max_tokens: 2048,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user",   content: text }
        ]
      })
    });

    if (!groqRes.ok) {
      const errorDetails = await groqRes.text();
      return res.status(502).json({ error: `خطأ Groq: ${errorDetails}` });
    }

    const data = await groqRes.json();
    let content = data.choices?.[0]?.message?.content?.trim();
    content = content.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();

    return res.status(200).json(JSON.parse(content));
  } catch (err) {
    return res.status(500).json({ error: `خطأ في الاتصال: ${err.message}` });
  }
  }

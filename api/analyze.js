export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { text } = req.body || {};
  if (!text || text.trim().length < 5) {
    return res.status(400).json({ error: "الرجاء إدخال نص صالح (5 أحرف على الأقل)." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "إعداد الخادم غير مكتمل. المفتاح غير موجود." });
  }

  const systemPrompt = `أنت محلل لغوي متخصص في أنماط التواصل، وأسلوبك مشوّق كأسلوب محقق لغوي، لكنك دقيق علميًا ولا تدّعي قراءة الأفكار.

حلّل النص المُرفق وأعد النتيجة بصيغة JSON فقط بهذا الشكل:
{
  "tone": "وصف النبرة العامة في جملة",
  "confidence_signals": ["عبارات تدل على الثقة أو الحسم"],
  "hedging_signals": ["عبارات غامضة أو تهرب أو تقليل من الشأن"],
  "emotional_markers": ["كلمات تكشف الحالة العاطفية"],
  "manipulation_patterns": [
    {"phrase": "العبارة", "pattern": "اسم النمط (تشتيت/تقليل/وعود غامضة/إلزام بالذنب)", "why": "شرح قصير"}
  ],
  "summary": "خلاصة في 3 أسطر بأسلوب مشوّق",
  "disclaimer_hint": "جملة تذكير بأن التحليل لغوي وليس حكمًا على الصدق"
}

قواعد صارمة:
- لا تُخرج أي نسبة مئوية للصدق أو الكذب إطلاقًا.
- لا تصف الشخص بأنه "كاذب" — صف النص فقط.
- إن كان النص قصيرًا جدًا أو غير كافٍ، قل ذلك بصراحة في summary.
- أعد JSON صالحًا فقط دون أي نص إضافي أو علامات markdown.`;

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        max_tokens: 1024,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user",   content: text }
        ]
      })
    });

    if (!groqRes.ok) {
      return res.status(502).json({ error: "تعذّر إكمال التحليل حاليًا. حاول لاحقًا." });
    }

    const data = await groqRes.json();
    let content = data.choices?.[0]?.message?.content?.trim();
    content = content.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();

    return res.status(200).json(JSON.parse(content));
  } catch (err) {
    return res.status(500).json({ error: "خطأ في الاتصال بخدمة التحليل." });
  }
}

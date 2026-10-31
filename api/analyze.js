export default async function handler(req, res) {
  // إعدادات السماح بالاتصال (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // استقبال النص والسؤال معاً
  const { text, question } = req.body || {};
  
  if (!text || text.trim().length < 5) {
    return res.status(400).json({ error: "الرجاء إدخال نص صالح (5 أحرف على الأقل)." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "إعداد الخادم غير مكتمل. المفتاح غير موجود." });
  }

  // التعليمات المحدثة (تحليل النص + الإجابة على أي سؤال)
  const systemPrompt = `أنت محلل لغوي خبير ومستشار ذكي. أسلوبك مشوّق كأسلوب محقق لغوي، لكنك دقيق علميًا.

قاعدة لغوية صارمة: 
يجب أن تكون جميع القيم النصية داخل الـ JSON مكتوبة بنفس لغة النص المُدخل (أو لغة السؤال إذا لم يوجد نص). 
إذا كان المدخل بالعربية، أجب بالعربية الفصحى. وإذا كان بالإنجليزية، أجب بالإنجليزية.

مهمتك الأولى: حلّل النص المُرفق وأعد النتيجة بصيغة JSON فقط بهذا الشكل:
{
  "tone": "وصف النبرة العامة في جملة",
  "confidence_signals": ["عبارات تدل على الثقة أو الحسم"],
  "hedging_signals": ["عبارات غامضة أو تهرب"],
  "emotional_markers": ["كلمات تكشف الحالة العاطفية"],
  "manipulation_patterns": [
    {"phrase": "العبارة", "pattern": "اسم النمط", "why": "شرح قصير"}
  ],
  "summary": "خلاصة في 3 أسطر بأسلوب مشوّق",
  "answer": "إجابة السؤال هنا"
}

مهمتك الثانية (إذا طرح المستخدم سؤالاً):
المستخدم قد يطرح سؤالاً (سواء كان متعلقاً بالنص، أو سؤالاً عاماً/خارجياً). يجب عليك الإجابة على سؤاله بدقة واحترافية ووضع الإجابة في حقل "answer" داخل الـ JSON.
${question ? `سؤال المستخدم هو: "${question}". أجب عليه بدقة.` : 'لم يطرح المستخدم أي سؤال، لذا اجعل قيمة "answer" هي null.'}

قواعد صارمة أخرى:
- لا تُخرج أي نسبة مئوية.
- لا تصف الشخص بأنه "كاذب".
- أعد JSON صالحًا فقط دون أي نص إضافي.`;

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", 
        temperature: 0.4,
        max_tokens: 1024,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user",   content: text } // نرسل النص هنا، والسؤال مدمج في التعليمات
        ]
      })
    });

    if (!groqRes.ok) {
      const errorDetails = await groqRes.text();
      return res.status(502).json({ error: `خطأ Groq: ${errorDetails}` });
    }

    const data = await groqRes.json();
    let content = data.choices?.[0]?.message?.content?.trim();
    
    // تنظيف أي علامات إضافية قد يضيفها النموذج
    content = content.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();

    return res.status(200).json(JSON.parse(content));
  } catch (err) {
    return res.status(500).json({ error: `خطأ في الاتصال: ${err.message}` });
  }
    }

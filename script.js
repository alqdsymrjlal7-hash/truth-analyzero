// ================= الترجمة (القاموس) =================
const translations = {
  ar: {
    page_title: "محلل النبرة النصية",
    brand: "محلل النبرة",
    hero_title: "اكشف نوايا الطرف الآخر",
    hero_subtitle: "ألصق الرسالة المشبوهة، ودع المحلل يكشف لك أنماط اللغة والتلاعب العاطفي في ثوانٍ.",
    input_label: "النص المراد تحليله",
    input_placeholder: "ألصق الرسالة أو المحادثة هنا لفحصها...",
    tags_label: "نوع العلاقة (اختياري):",
    tag_partner: "شريك حياة",
    tag_colleague: "زميل عمل",
    tag_friend: "صديق",
    tag_other: "أخرى",
    cta_button: "ابدأ التحليل السري الآن",
    consent_note: "بضغطك على التحليل توافق على إرسال النص لخدمة تحليل خارجية.",
    loading_1: "جاري فحص النبرة...",
    loading_2: "تحليل العلامات النصية...",
    loading_3: "مقارنة الأنماط اللغوية...",
    result_title: "تقرير التحليل",
    result_reset: "تحليل جديد",
    result_tone: "النبرة العامة",
    result_confidence: "مؤشرات الثقة",
    result_hedging: "مؤشرات التهرب",
    result_emotional: "البصمات العاطفية",
    result_manipulation: "أنماط التلاعب المحتملة",
    result_summary: "الخلاصة",
    result_disclaimer: "⚠️ هذا تحليل لغوي تعليمي، وليس دليلًا على الصدق أو الكذب.",
    result_share: "شارك النتيجة مع أصدقائك",
    footer_copy: "© 2026 محلل النبرة. جميع الحقوق محفوظة.",
    footer_privacy: "سياسة الخصوصية",
    footer_disclaimer: "إخلاء المسؤولية",
    privacy_title: "سياسة الخصوصية",
    privacy_body_1: "نحن لا نخزّن النصوص التي تلصقها في الموقع.",
    privacy_body_2: "عند ضغطك على زر التحليل، يُرسَل النص إلى خدمة تحليل لغوي خارجية (Groq) لمعالجته وإعادته إليك.",
    privacy_body_3: "لا تُشارَك بياناتك مع أي طرف آخر، ولا تُستخدم لأي غرض غير التحليل الفوري.",
    privacy_body_4: "يُرجى عدم لصق معلومات شخصية حساسة (أرقام هوية، كلمات مرور، بيانات بنكية).",
    disclaimer_title: "إخلاء المسؤولية",
    disclaimer_body_1: "هذه الأداة تُقدّم تحليلًا لغويًا تعليميًا للنصوص، وليست أداة لكشف الكذب.",
    disclaimer_body_2: "لا تعتمد على نتائجها لاتخاذ قرارات شخصية أو قانونية أو مالية.",
    disclaimer_body_3: "لا يوجد أي أساس علمي لتحويل نبرة النص إلى نسبة صدق مئوية.",
    disclaimer_body_4: "استخدامك للأداة على مسؤوليتك الشخصية.",
    error_empty: "الرجاء إدخال نص أولاً.",
    error_api: "عذراً، حدث خطأ أثناء الاتصال بالخادم. تأكد من تشغيل السيرفر.",
    no_patterns: "لم يتم اكتشاف أنماط تلاعب واضحة.",
    no_signals: "لا توجد مؤشرات واضحة."
  },
  en: {
    page_title: "Tone Analyzer",
    brand: "Tone Analyzer",
    hero_title: "Reveal the Other Party's Intentions",
    hero_subtitle: "Paste the suspicious message and let the analyzer uncover language patterns and emotional manipulation in seconds.",
    input_label: "Text to Analyze",
    input_placeholder: "Paste the message or conversation here to scan...",
    tags_label: "Relationship type (optional):",
    tag_partner: "Partner",
    tag_colleague: "Colleague",
    tag_friend: "Friend",
    tag_other: "Other",
    cta_button: "Start Secret Analysis Now",
    consent_note: "By clicking analyze, you agree to send the text to an external analysis service.",
    loading_1: "Scanning tone...",
    loading_2: "Analyzing text markers...",
    loading_3: "Comparing language patterns...",
    result_title: "Analysis Report",
    result_reset: "New Analysis",
    result_tone: "General Tone",
    result_confidence: "Confidence Signals",
    result_hedging: "Hedging Signals",
    result_emotional: "Emotional Markers",
    result_manipulation: "Potential Manipulation Patterns",
    result_summary: "Summary",
    result_disclaimer: "⚠️ This is an educational linguistic analysis, not evidence of truthfulness.",
    result_share: "Share Results with Friends",
    footer_copy: "© 2026 Tone Analyzer. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_disclaimer: "Disclaimer",
    privacy_title: "Privacy Policy",
    privacy_body_1: "We do not store the texts you paste on the site.",
    privacy_body_2: "When you click analyze, the text is sent to an external linguistic analysis service (Groq) for processing and returned to you.",
    privacy_body_3: "Your data is not shared with any other party and is not used for any purpose other than immediate analysis.",
    privacy_body_4: "Please do not paste sensitive personal information (ID numbers, passwords, banking data).",
    disclaimer_title: "Disclaimer",
    disclaimer_body_1: "This tool provides educational linguistic analysis of texts and is not a lie detector.",
    disclaimer_body_2: "Do not rely on its results for personal, legal, or financial decisions.",
    disclaimer_body_3: "There is no scientific basis for converting text tone into a truth percentage.",
    disclaimer_body_4: "Your use of the tool is at your own risk.",
    error_empty: "Please enter some text first.",
    error_api: "Sorry, an error occurred while connecting to the server. Make sure the server is running.",
    no_patterns: "No clear manipulation patterns detected.",
    no_signals: "No clear signals found."
  }
};

let currentLang = 'ar';

// ================= دالة تغيير اللغة =================
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const htmlTag = document.documentElement;
  const langToggleBtn = document.getElementById('langCurrent');
  const langOtherBtn = document.querySelector('.lang-other');

  if (currentLang === 'en') {
    htmlTag.setAttribute('lang', 'en');
    htmlTag.setAttribute('dir', 'ltr');
    langToggleBtn.textContent = 'EN';
    langOtherBtn.textContent = 'AR';
  } else {
    htmlTag.setAttribute('lang', 'ar');
    htmlTag.setAttribute('dir', 'rtl');
    langToggleBtn.textContent = 'AR';
    langOtherBtn.textContent = 'EN';
  }

  // تحديث جميع النصوص
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // تحديث placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// ================= عدّاد الأحرف =================
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');

messageInput.addEventListener('input', () => {
  charCount.textContent = messageInput.value.length;
});

// ================= تفعيل الأزرار (Tags) =================
const tagButtons = document.querySelectorAll('.tag');
tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tagButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ================= فتح وإغلاق النوافذ المنبثقة =================
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).hidden = false;
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-close');
    document.getElementById(modalId).hidden = true;
  });
});

// ================= شاشة التحميل =================
let loadingInterval;
const loadingTextElement = document.getElementById('loadingText');

function startLoadingAnimation() {
  let step = 1;
  loadingTextElement.textContent = translations[currentLang].loading_1;
  
  loadingInterval = setInterval(() => {
    step = step === 1 ? 2 : (step === 2 ? 3 : 1);
    loadingTextElement.textContent = translations[currentLang][`loading_${step}`];
  }, 1500);
}

function stopLoadingAnimation() {
  clearInterval(loadingInterval);
}

// ================= عرض النتائج =================
function displayResults(data) {
  // النبرة
  document.getElementById('resultTone').textContent = data.tone || '-';

  // دوال مساعدة لملء القوائم
  const fillList = (elementId, items, emptyText) => {
    const ul = document.getElementById(elementId);
    ul.innerHTML = '';
    if (!items || items.length === 0) {
      ul.innerHTML = `<li>${emptyText}</li>`;
      return;
    }
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  };

  fillList('resultConfidence', data.confidence_signals, translations[currentLang].no_signals);
  fillList('resultHedging', data.hedging_signals, translations[currentLang].no_signals);
  fillList('resultEmotional', data.emotional_markers, translations[currentLang].no_signals);

  // أنماط التلاعب
  const manipulationContainer = document.getElementById('resultManipulation');
  manipulationContainer.innerHTML = '';
  if (!data.manipulation_patterns || data.manipulation_patterns.length === 0) {
    manipulationContainer.innerHTML = `<p class="result-text">${translations[currentLang].no_patterns}</p>`;
  } else {
    data.manipulation_patterns.forEach(pattern => {
      const div = document.createElement('div');
      div.className = 'pattern-item';
      div.innerHTML = `
        <div class="pattern-phrase">"${pattern.phrase}"</div>
        <span class="pattern-type">${pattern.pattern}</span>
        <div class="pattern-why">${pattern.why}</div>
      `;
      manipulationContainer.appendChild(div);
    });
  }

  // الخلاصة
  document.getElementById('resultSummary').textContent = data.summary || '-';

  // إظهار النتيجة وإخفاء صندوق التحليل
  document.getElementById('analyzerCard').style.display = 'none';
  document.getElementById('loadingBox').hidden = true;
  document.getElementById('resultCard').hidden = false;
}

// ================= زر التحليل الرئيسي =================
document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const text = messageInput.value.trim();
  
  if (text.length < 5) {
    alert(translations[currentLang].error_empty);
    return;
  }

  // تجهيز واجهة المستخدم
  document.getElementById('analyzerCard').style.display = 'none';
  document.getElementById('resultCard').hidden = true;
  document.getElementById('loadingBox').hidden = false;
  startLoadingAnimation();

  try {
    // الاتصال بالـ API
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    });

    // تعديل مهم: قراءة رسالة الخطأ الحقيقية من الخادم إذا فشل الطلب
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'API Error');
    }

    const data = await response.json();
    
    // إظهار النتائج مباشرة (تمت إزالة التأخير)
    stopLoadingAnimation();
    displayResults(data);

  } catch (error) {
    console.error(error);
    stopLoadingAnimation();
    document.getElementById('loadingBox').hidden = true;
    document.getElementById('analyzerCard').style.display = 'block';
    
    // تعديل مهم: إظهار سبب الخطأ الحقيقي للمستخدم
    alert(error.message || translations[currentLang].error_api);
  }
});

// ================= زر التحليل الجديد (إعادة تعيين) =================
document.getElementById('resetBtn').addEventListener('click', () => {
  messageInput.value = '';
  charCount.textContent = '0';
  tagButtons.forEach(b => b.classList.remove('active'));
  
  document.getElementById('resultCard').hidden = true;
  document.getElementById('analyzerCard').style.display = 'block';
});

// ================= زر المشاركة =================
document.getElementById('shareBtn').addEventListener('click', () => {
  // نسخ رابط الموقع الحالي للمشاركة
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert(currentLang === 'ar' ? 'تم نسخ رابط الموقع بنجاح! شاركه مع أصدقائك.' : 'Link copied successfully! Share it with your friends.');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});
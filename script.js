// ================= الترجمة (القاموس) =================
const translations = {
  ar: {
    page_title: "محلل النبرة النصية",
    brand: "محلل النبرة",
    hero_title: "اكشف نوايا الطرف الآخر",
    hero_subtitle: "ألصق الرسالة المشبوهة، ودع المحلل يكشف لك أنماط اللغة والتلاعب العاطفي في ثوانٍ.",
    input_label: "النص المراد تحليله",
    input_placeholder: "ألصق الرسالة أو المحادثة هنا لفحصها...",
    question_label: "هل لديك سؤال حول النص؟ (اختياري)",
    question_placeholder: "مثال: هل هذا الشخص يهددني؟ أو كيف أرد عليه؟",
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
    loading_image: "جاري استخراج النص من الصورة... ⏳",
    result_title: "تقرير التحليل",
    result_reset: "تحليل جديد",
    result_dialect: "اللهجة والمنطقة 🗣️",
    result_tone: "النبرة العامة",
    result_confidence: "مؤشرات الثقة",
    result_hedging: "مؤشرات التهرب",
    result_emotional: "البصمات العاطفية",
    result_manipulation: "أنماط التلاعب المحتملة",
    result_summary: "الخلاصة",
    result_answer_title: "إجابة سؤالك",
    result_disclaimer: "⚠️ هذا تحليل لغوي تعليمي، وليس دليلًا على الصدق أو الكذب.",
    result_copy: "نسخ النتيجة 📋",
    result_whatsapp: "مشاركة واتساب 💬",
    result_download: "تحميل النتيجة كصورة 📸",
    result_share: "نسخ رابط الموقع",
    history_title: "سجل التحليلات السابقة",
    history_empty: "لا توجد تحليلات سابقة.",
    footer_copy: "© 2026 جميع الحقوق محفوظة لدى ",
    company_name: "شركة القدسي سوفت",
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
    error_image: "تعذر قراءة الصورة، يرجى التأكد من وضوح النص.",
    no_patterns: "لم يتم اكتشاف أنماط تلاعب واضحة.",
    no_signals: "لا توجد مؤشرات واضحة.",
    toast_copied: "تم نسخ النتيجة بنجاح! 📋",
    toast_no_result: "لا توجد نتيجة للنسخ.",
    toast_image_ready: "تم تحميل الصورة بنجاح! 📸",
    toast_image_fail: "فشل تحميل الصورة.",
    toast_share_success: "تم نسخ رابط الموقع بنجاح! 🎉",
    toast_share_fail: "فشل نسخ الرابط"
  },
  en: {
    page_title: "Tone Analyzer",
    brand: "Tone Analyzer",
    hero_title: "Reveal the Other Party's Intentions",
    hero_subtitle: "Paste the suspicious message and let the analyzer uncover language patterns and emotional manipulation in seconds.",
    input_label: "Text to Analyze",
    input_placeholder: "Paste the message or conversation here to scan...",
    question_label: "Do you have a question about the text? (Optional)",
    question_placeholder: "Example: Is this person threatening me? Or how should I reply?",
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
    loading_image: "Extracting text from image... ⏳",
    result_title: "Analysis Report",
    result_reset: "New Analysis",
    result_dialect: "Dialect & Region 🗣️",
    result_tone: "General Tone",
    result_confidence: "Confidence Signals",
    result_hedging: "Hedging Signals",
    result_emotional: "Emotional Markers",
    result_manipulation: "Potential Manipulation Patterns",
    result_summary: "Summary",
    result_answer_title: "Answer to your question",
    result_disclaimer: "⚠️ This is an educational linguistic analysis, not evidence of truthfulness.",
    result_copy: "Copy Result 📋",
    result_whatsapp: "Share on WhatsApp 💬",
    result_download: "Download Result as Image 📸",
    result_share: "Copy Site Link",
    history_title: "Previous Analyses",
    history_empty: "No previous analyses.",
    footer_copy: "© 2026 All rights reserved to ",
    company_name: "Al-Qudsi Soft",
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
    error_image: "Could not read the image, please ensure text is clear.",
    no_patterns: "No clear manipulation patterns detected.",
    no_signals: "No clear signals found.",
    toast_copied: "Result copied successfully! 📋",
    toast_no_result: "No result to copy.",
    toast_image_ready: "Image downloaded successfully! 📸",
    toast_image_fail: "Failed to download image.",
    toast_share_success: "Link copied successfully! 🎉",
    toast_share_fail: "Failed to copy link"
  }
};

let currentLang = 'ar';
let currentAnalysisData = null; 

// ================= 1. تطبيق اللغة =================
function applyLanguage() {
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

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });
  
  renderHistory(); 
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage();
}
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// ================= 2. الكشف التلقائي عن اللغة =================
async function autoDetectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('ar')) {
    currentLang = 'ar';
    return applyLanguage();
  } else if (browserLang.startsWith('en')) {
    currentLang = 'en';
    return applyLanguage();
  }

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const arabicCountries = ['SA', 'YE', 'EG', 'AE', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB', 'SY', 'IQ', 'PS', 'SD', 'LY', 'TN', 'DZ', 'MA', 'MR', 'SO', 'DJ', 'KM'];
    currentLang = arabicCountries.includes(data.country_code) ? 'ar' : 'en';
  } catch (error) {
    currentLang = 'en';
  }
  applyLanguage();
}
autoDetectLanguage();

// ================= 3. الوضع الليلي والنهاري =================
function setThemeByTime() {
  const hour = new Date().getHours();
  const isDayTime = hour >= 6 && hour < 18;
  if (isDayTime) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}
setThemeByTime();

// ================= 4. دالة الإشعارات =================
function showToast(message, isError = false) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= 5. الحقول وتكبير المربع =================
const messageInput = document.getElementById('messageInput');
const questionInput = document.getElementById('questionInput');
const charCount = document.getElementById('charCount');

messageInput.addEventListener('input', function() {
  charCount.textContent = this.value.length;
  this.style.height = 'auto'; 
  const newHeight = Math.min(this.scrollHeight, 300);
  this.style.height = newHeight + 'px';
  this.style.overflowY = this.scrollHeight > 300 ? 'auto' : 'hidden';
});

// ================= 6. تفعيل الأزرار (Tags) =================
const tagButtons = document.querySelectorAll('.tag');
tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tagButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ================= 7. النوافذ المنبثقة =================
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

// ================= 8. شاشة التحميل =================
let loadingInterval;
const loadingTextElement = document.getElementById('loadingText');

function startLoadingAnimation(customText = null) {
  let step = 1;
  if (customText) {
    loadingTextElement.textContent = customText;
  } else {
    loadingTextElement.textContent = translations[currentLang].loading_1;
    loadingInterval = setInterval(() => {
      step = step === 1 ? 2 : (step === 2 ? 3 : 1);
      loadingTextElement.textContent = translations[currentLang][`loading_${step}`];
    }, 1500);
  }
}
function stopLoadingAnimation() {
  clearInterval(loadingInterval);
}

// ================= 9. عرض النتائج =================
function displayResults(data) {
  currentAnalysisData = data; 
  
  // 🌟 عرض اللهجة الجديد
  document.getElementById('resultDialect').textContent = data.dialect || '-';
  document.getElementById('resultTone').textContent = data.tone || '-';

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

  document.getElementById('resultSummary').textContent = data.summary || '-';

  if (data.answer && data.answer !== "null" && data.answer.trim() !== "") {
    document.getElementById('resultAnswer').textContent = data.answer;
    document.getElementById('resultAnswerBlock').hidden = false;
  } else {
    document.getElementById('resultAnswerBlock').hidden = true;
  }

  document.getElementById('analyzerCard').style.display = 'none';
  document.getElementById('loadingBox').hidden = true;
  document.getElementById('resultCard').hidden = false;
}

// ================= 10. زر التحليل الرئيسي =================
document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const text = messageInput.value.trim();
  const question = questionInput.value.trim();
  
  if (text.length < 5) {
    showToast(translations[currentLang].error_empty, true);
    return;
  }

  document.getElementById('analyzerCard').style.display = 'none';
  document.getElementById('resultCard').hidden = true;
  document.getElementById('loadingBox').hidden = false;
  startLoadingAnimation();

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, question: question })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'API Error');
    }

    const data = await response.json();
    stopLoadingAnimation();
    displayResults(data);
    
    saveToHistory(text, data);

  } catch (error) {
    console.error(error);
    stopLoadingAnimation();
    document.getElementById('loadingBox').hidden = true;
    document.getElementById('analyzerCard').style.display = 'block';
    showToast(error.message || translations[currentLang].error_api, true);
  }
});

// ================= 11. زر التحليل الجديد =================
document.getElementById('resetBtn').addEventListener('click', () => {
  messageInput.value = '';
  questionInput.value = '';
  charCount.textContent = '0';
  messageInput.style.height = '130px'; 
  messageInput.style.overflowY = 'hidden';
  tagButtons.forEach(b => b.classList.remove('active'));
  document.getElementById('resultCard').hidden = true;
  document.getElementById('analyzerCard').style.display = 'block';
  currentAnalysisData = null;
});

// ================= 12. أزرار النسخ والمشاركة والتحميل =================

// زر نسخ النتيجة
document.getElementById('copyBtn').addEventListener('click', () => {
  if (!currentAnalysisData) return showToast(translations[currentLang].toast_no_result, true);
  
  const d = currentAnalysisData;
  const textToCopy = `
${translations[currentLang].result_title}:
${translations[currentLang].result_dialect}: ${d.dialect}
${translations[currentLang].result_tone}: ${d.tone}
${translations[currentLang].result_summary}: ${d.summary}
${d.answer ? translations[currentLang].result_answer_title + ': ' + d.answer : ''}
  `.trim();

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast(translations[currentLang].toast_copied);
  }).catch(() => {
    showToast('Error', true);
  });
});

// زر الواتساب
document.getElementById('whatsappBtn').addEventListener('click', () => {
  if (!currentAnalysisData) return;
  const summary = currentAnalysisData.summary || '';
  const siteUrl = window.location.href;
  const waText = encodeURIComponent(`${translations[currentLang].result_summary}: ${summary}\n\n${translations[currentLang].brand}: ${siteUrl}`);
  window.open(`https://wa.me/?text=${waText}`, '_blank');
});

// زر نسخ رابط الموقع
document.getElementById('shareBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast(translations[currentLang].toast_share_success);
  }).catch(err => {
    showToast(translations[currentLang].toast_share_fail, true);
  });
});

// زر تحميل الصورة
document.getElementById('downloadBtn').addEventListener('click', () => {
  const resultCard = document.getElementById('resultCard');
  const downloadBtn = document.getElementById('downloadBtn');
  const originalText = downloadBtn.textContent;

  downloadBtn.textContent = currentLang === 'ar' ? 'جاري تجهيز الصورة... ⏳' : 'Generating Image... ⏳';
  downloadBtn.disabled = true;

  const actionsDiv = document.querySelector('.result-actions');
  const originalActionsDisplay = actionsDiv.style.display;
  actionsDiv.style.display = 'none';
  
  const resetBtn = document.getElementById('resetBtn');
  resetBtn.style.display = 'none';

  resultCard.classList.add('capturing');

  html2canvas(resultCard, {
    scale: 2, 
    useCORS: true,
    backgroundColor: '#080d18'
  }).then(canvas => {
    resultCard.classList.remove('capturing');
    actionsDiv.style.display = originalActionsDisplay;
    resetBtn.style.display = '';
    downloadBtn.textContent = originalText;
    downloadBtn.disabled = false;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image;
    link.download = `Truth-Analyzer-${Date.now()}.png`;
    link.click();
    
    showToast(translations[currentLang].toast_image_ready);
  }).catch(err => {
    console.error(err);
    resultCard.classList.remove('capturing');
    actionsDiv.style.display = originalActionsDisplay;
    resetBtn.style.display = '';
    downloadBtn.textContent = originalText;
    downloadBtn.disabled = false;
    showToast(translations[currentLang].toast_image_fail, true);
  });
});

// ================= 13. نظام سجل التحليلات (History) =================
function saveToHistory(text, data) {
  let history = JSON.parse(localStorage.getItem('nexusHistory')) || [];
  const newItem = {
    id: Date.now(),
    snippet: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
    date: new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
    fullData: data
  };
  
  history.unshift(newItem);
  if (history.length > 5) history.pop();
  
  localStorage.setItem('nexusHistory', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const historySection = document.getElementById('historySection');
  const historyList = document.getElementById('historyList');
  let history = JSON.parse(localStorage.getItem('nexusHistory')) || [];

  if (history.length === 0) {
    historySection.hidden = true;
    return;
  }

  historySection.hidden = false;
  historyList.innerHTML = '';
  
  history.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="history-snippet">${item.snippet}</div>
      <div class="history-date">${item.date}</div>
    `;
    li.addEventListener('click', () => {
      document.getElementById('analyzerCard').style.display = 'none';
      displayResults(item.fullData);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    historyList.appendChild(li);
  });
}

renderHistory();

// ================= 14. ميزة رفع الصورة (OCR) =================
const imageInput = document.getElementById('imageInput');
const uploadImageBtn = document.getElementById('uploadImageBtn');
const imageName = document.getElementById('imageName');

uploadImageBtn.addEventListener('click', () => {
  imageInput.click();
});

imageInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  imageName.textContent = file.name;
  imageName.style.display = 'block';
  
  if (typeof Tesseract === 'undefined') {
    showToast(currentLang === 'ar' ? 'جاري تحميل أدوات قراءة الصور...' : 'Loading OCR tools...');
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  document.getElementById('analyzerCard').style.display = 'none';
  document.getElementById('loadingBox').hidden = false;
  startLoadingAnimation(translations[currentLang].loading_image);

  try {
    const result = await Tesseract.recognize(file, currentLang === 'ar' ? 'ara+eng' : 'eng+ara');
    const extractedText = result.data.text.trim();
    
    stopLoadingAnimation();
    document.getElementById('loadingBox').hidden = true;
    document.getElementById('analyzerCard').style.display = 'block';
    
    if (extractedText.length > 5) {
      messageInput.value = extractedText;
      messageInput.dispatchEvent(new Event('input'));
      showToast(currentLang === 'ar' ? 'تم استخراج النص بنجاح!' : 'Text extracted successfully!');
    } else {
      showToast(translations[currentLang].error_image, true);
    }
  } catch (err) {
    console.error(err);
    stopLoadingAnimation();
    document.getElementById('loadingBox').hidden = true;
    document.getElementById('analyzerCard').style.display = 'block';
    showToast(translations[currentLang].error_image, true);
  }
});

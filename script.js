const translations = {
  ar: {
    page_title: "محلل النبرة النصية",
    brand: "محلل النبرة",
    hero_title: "اكشف نوايا الطرف الآخر",
    hero_subtitle: "ألصق الرسالة المشبوهة، ودع المحلل يكشف لك أنماط اللغة والتلاعب العاطفي في ثوانٍ.",
    input_label: "النص المراد تحليله",
    input_placeholder: "ألصق الرسالة أو المحادثة هنا لفحصها...",
    upload_image_btn: "أو قم برفع صورة محادثة لتحليلها",
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
    error_empty: "الرجاء إدخال نص أولاً.",
    error_api: "عذراً، حدث خطأ أثناء الاتصال بالخادم.",
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
    upload_image_btn: "Or upload a chat image to analyze",
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
    error_empty: "Please enter some text first.",
    error_api: "Sorry, an error occurred while connecting to the server.",
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

// ==========================================
// المتغيرات الأساسية
// ==========================================
let currentLang = 'en';
let browserTargetLanguage = 'en';
let currentAnalysisData = null;
let loadingInterval = null;
let googleTranslatorReady = false;
let manualLanguageSelection = false;

const messageInput = document.getElementById('messageInput');
const questionInput = document.getElementById('questionInput');
const charCount = document.getElementById('charCount');
const loadingTextElement = document.getElementById('loadingText');

// ==========================================
// تحديد لغة المتصفح
// ==========================================
function getBrowserLanguage() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
  for (const language of languages) {
    const code = language.toLowerCase().split('-')[0];
    if (code && code !== 'und') return code;
  }
  return 'en';
}

// ==========================================
// اتجاه الصفحة
// ==========================================
function setPageDirection(language) {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'ug', 'yi', 'ku', 'dv'];
  const html = document.documentElement;
  html.setAttribute('lang', language);
  html.setAttribute('dir', rtlLanguages.includes(language) ? 'rtl' : 'ltr');
}

// ==========================================
// تطبيق اللغة الأساسية
// ==========================================
function applyLanguage() {
  const htmlTag = document.documentElement;
  const langToggleBtn = document.getElementById('langCurrent');
  const langOtherBtn = document.querySelector('.lang-other');
  const dictionary = translations[currentLang] || translations.en;

  htmlTag.setAttribute('lang', currentLang);
  htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  if (langToggleBtn) langToggleBtn.textContent = currentLang.toUpperCase();
  if (langOtherBtn) langOtherBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      el.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      el.setAttribute('placeholder', dictionary[key]);
    }
  });

  const pageTitle = document.querySelector('[data-i18n="page_title"]');
  if (pageTitle) document.title = dictionary.page_title;

  renderHistory();
}

// ==========================================
// التبديل اليدوي بين العربية والإنجليزية
// ==========================================
function toggleLanguage() {
  manualLanguageSelection = true;
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage();
  setPageDirection(currentLang);
  if (currentLang === 'ar' || currentLang === 'en') {
    changeGoogleLanguage(currentLang);
  }
}
const langBtn = document.getElementById('langToggle');
if (langBtn) langBtn.addEventListener('click', toggleLanguage);

// ==========================================
// خدمة الترجمة التلقائية
// ==========================================
function changeGoogleLanguage(language) {
  if (!googleTranslatorReady) return;
  const combo = document.querySelector('.goog-te-combo');
  if (!combo) return;
  const supported = Array.from(combo.options).some(option => option.value === language);
  if (!supported) return;
  combo.value = language;
  combo.dispatchEvent(new Event('change', { bubbles: true }));
  setPageDirection(language);
}

function initGoogleTranslate() {
  if (browserTargetLanguage === 'en') return;
  if (!document.getElementById('google_translate_element')) {
    const element = document.createElement('div');
    element.id = 'google_translate_element';
    element.style.display = 'none';
    document.body.appendChild(element);
  }

  if (!document.getElementById('translationStyles')) {
    const style = document.createElement('style');
    style.id = 'translationStyles';
    style.textContent = `
      .goog-te-banner-frame, .goog-te-balloon-frame, #goog-gt-tt, .goog-te-gadget, .skiptranslate { display: none !important; }
      body { top: 0 !important; }
      html { margin-top: 0 !important; }
    `;
    document.head.appendChild(style);
  }

  if (document.getElementById('googleTranslateScript')) return;

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
    googleTranslatorReady = true;
    setTimeout(() => { changeGoogleLanguage(browserTargetLanguage); }, 800);
  };

  const script = document.createElement('script');
  script.id = 'googleTranslateScript';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.onerror = () => { console.error('Google Translate could not be loaded.'); };
  document.head.appendChild(script);
}

// ==========================================
// اكتشاف اللغة عند فتح الموقع
// ==========================================
async function autoDetectLanguage() {
  browserTargetLanguage = getBrowserLanguage();
  if (browserTargetLanguage === 'ar') {
    currentLang = 'ar';
    applyLanguage();
    setPageDirection('ar');
    return;
  }
  currentLang = 'en';
  applyLanguage();
  setPageDirection(browserTargetLanguage);
  if (browserTargetLanguage !== 'en') {
    initGoogleTranslate();
  }
}

// ==========================================
// مراقبة العناصر التي تظهر ديناميكياً
// ==========================================
function observeDynamicContent() {
  if (!window.MutationObserver) return;
  const observer = new MutationObserver(() => {
    if (!googleTranslatorReady) return;
    const combo = document.querySelector('.goog-te-combo');
    if (combo && combo.value !== browserTargetLanguage && !manualLanguageSelection) {
      changeGoogleLanguage(browserTargetLanguage);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

autoDetectLanguage().then(() => { observeDynamicContent(); });

// ==========================================
// الوضع الليلي والنهاري
// ==========================================
function setThemeByTime() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}
setThemeByTime();

// ==========================================
// الإشعارات
// ==========================================
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

// ==========================================
// عداد الأحرف وتنسيق حقل النص
// ==========================================
if (messageInput) {
  messageInput.addEventListener('input', function () {
    if (charCount) charCount.textContent = this.value.length;
    this.style.height = 'auto';
    const newHeight = Math.min(this.scrollHeight, 300);
    this.style.height = newHeight + 'px';
    this.style.overflowY = this.scrollHeight > 300 ? 'auto' : 'hidden';
  });
}

// ==========================================
// أزرار نوع العلاقة
// ==========================================
const tagButtons = document.querySelectorAll('.tag');
tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tagButtons.forEach(button => { button.classList.remove('active'); });
    btn.classList.add('active');
  });
});

// ==========================================
// النوافذ المنبثقة
// ==========================================
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.hidden = false;
  });
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-close');
    const modal = document.getElementById(modalId);
    if (modal) modal.hidden = true;
  });
});

// ==========================================
// حركة التحميل
// ==========================================
function startLoadingAnimation(customText = null) {
  let step = 1;
  if (!loadingTextElement) return;
  if (customText) {
    loadingTextElement.textContent = customText;
  } else {
    loadingTextElement.textContent = translations[currentLang].loading_1;
    loadingInterval = setInterval(() => {
      step = step === 1 ? 2 : step === 2 ? 3 : 1;
      loadingTextElement.textContent = translations[currentLang][`loading_${step}`];
    }, 1500);
  }
}
function stopLoadingAnimation() {
  clearInterval(loadingInterval);
}

// ==========================================
// عرض النتائج (بدون لهجة)
// ==========================================
function displayResults(data) {
  currentAnalysisData = data;

  const toneEl = document.getElementById('resultTone');
  if (toneEl) toneEl.textContent = data.tone || '-';

  const fillList = (elementId, items, emptyText) => {
    const ul = document.getElementById(elementId);
    if (!ul) return;
    ul.innerHTML = '';
    if (!items || items.length === 0) {
      const li = document.createElement('li');
      li.textContent = emptyText;
      ul.appendChild(li);
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
  if (manipulationContainer) {
    manipulationContainer.innerHTML = '';
    if (!data.manipulation_patterns || data.manipulation_patterns.length === 0) {
      const p = document.createElement('p');
      p.className = 'result-text';
      p.textContent = translations[currentLang].no_patterns;
      manipulationContainer.appendChild(p);
    } else {
      data.manipulation_patterns.forEach(pattern => {
        const div = document.createElement('div');
        div.className = 'pattern-item';
        const phrase = document.createElement('div');
        phrase.className = 'pattern-phrase';
        phrase.textContent = `"${pattern.phrase}"`;
        const type = document.createElement('span');
        type.className = 'pattern-type';
        type.textContent = pattern.pattern;
        const why = document.createElement('div');
        why.className = 'pattern-why';
        why.textContent = pattern.why;
        div.append(phrase, type, why);
        manipulationContainer.appendChild(div);
      });
    }
  }

  const summaryEl = document.getElementById('resultSummary');
  if (summaryEl) summaryEl.textContent = data.summary || '-';

  if (data.answer && data.answer !== 'null' && data.answer.trim() !== '') {
    const ansEl = document.getElementById('resultAnswer');
    if (ansEl) ansEl.textContent = data.answer;
    const ansBlock = document.getElementById('resultAnswerBlock');
    if (ansBlock) ansBlock.hidden = false;
  } else {
    const ansBlock = document.getElementById('resultAnswerBlock');
    if (ansBlock) ansBlock.hidden = true;
  }

  const analyzerCard = document.getElementById('analyzerCard');
  const loadingBox = document.getElementById('loadingBox');
  const resultCard = document.getElementById('resultCard');

  if (analyzerCard) analyzerCard.style.display = 'none';
  if (loadingBox) loadingBox.hidden = true;
  if (resultCard) resultCard.hidden = false;
}

// ==========================================
// تحليل النص (يرسل responseLanguage للخادم)
// ==========================================
const analyzeBtn = document.getElementById('analyzeBtn');
if (analyzeBtn) {
  analyzeBtn.addEventListener('click', async () => {
    const text = messageInput ? messageInput.value.trim() : '';
    const question = questionInput ? questionInput.value.trim() : '';

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
        body: JSON.stringify({
          text: text,
          question: question,
          responseLanguage: "same_as_input" // مهم جداً للخادم الجديد
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || translations[currentLang].error_api);
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
}

// ==========================================
// إعادة التحليل
// ==========================================
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (messageInput) messageInput.value = '';
    if (questionInput) questionInput.value = '';
    if (charCount) charCount.textContent = '0';
    if (messageInput) {
      messageInput.style.height = '130px';
      messageInput.style.overflowY = 'hidden';
    }
    tagButtons.forEach(btn => { btn.classList.remove('active'); });
    document.getElementById('resultCard').hidden = true;
    document.getElementById('analyzerCard').style.display = 'block';
    currentAnalysisData = null;
  });
}

// ==========================================
// نسخ النتيجة
// ==========================================
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    if (!currentAnalysisData) return showToast(translations[currentLang].toast_no_result, true);
    const d = currentAnalysisData;
    const textToCopy = `${translations[currentLang].result_title}:\n` +
      `${translations[currentLang].result_tone}: ${d.tone}\n` +
      `${translations[currentLang].result_summary}: ${d.summary}\n` +
      (d.answer ? translations[currentLang].result_answer_title + ': ' + d.answer : '');

    navigator.clipboard.writeText(textToCopy.trim())
      .then(() => { showToast(translations[currentLang].toast_copied); })
      .catch(() => { showToast('Error', true); });
  });
}

// ==========================================
// مشاركة واتساب
// ==========================================
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    if (!currentAnalysisData) return;
    const summary = currentAnalysisData.summary || '';
    const siteUrl = window.location.href;
    const waText = encodeURIComponent(`${translations[currentLang].result_summary}: ${summary}\n\n${translations[currentLang].brand}: ${siteUrl}`);
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  });
}

// ==========================================
// نسخ رابط الموقع
// ==========================================
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => { showToast(translations[currentLang].toast_share_success); })
      .catch(() => { showToast(translations[currentLang].toast_share_fail, true); });
  });
}

// ==========================================
// تحميل النتيجة كصورة
// ==========================================
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const resultCard = document.getElementById('resultCard');
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = currentLang === 'ar' ? 'جاري تجهيز الصورة... ⏳' : 'Generating Image... ⏳';
    downloadBtn.disabled = true;

    const actionsDiv = document.querySelector('.result-actions');
    const originalActionsDisplay = actionsDiv ? actionsDiv.style.display : '';
    if (actionsDiv) actionsDiv.style.display = 'none';
    const rBtn = document.getElementById('resetBtn');
    if (rBtn) rBtn.style.display = 'none';

    resultCard.classList.add('capturing');

    html2canvas(resultCard, { scale: 2, useCORS: true, backgroundColor: '#080d18' })
      .then(canvas => {
        resultCard.classList.remove('capturing');
        if (actionsDiv) actionsDiv.style.display = originalActionsDisplay;
        if (rBtn) rBtn.style.display = '';
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;

        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `Truth-Analyzer-${Date.now()}.png`;
        link.click();
        showToast(translations[currentLang].toast_image_ready);
      })
      .catch(() => {
        resultCard.classList.remove('capturing');
        if (actionsDiv) actionsDiv.style.display = originalActionsDisplay;
        if (rBtn) rBtn.style.display = '';
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
        showToast(translations[currentLang].toast_image_fail, true);
      });
  });
}

// ==========================================
// حفظ سجل التحليلات
// ==========================================
function saveToHistory(text, data) {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('nexusHistory')) || [];
  } catch {
    history = [];
  }
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

// ==========================================
// عرض سجل التحليلات
// ==========================================
function renderHistory() {
  const historySection = document.getElementById('historySection');
  const historyList = document.getElementById('historyList');
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem('nexusHistory')) || [];
  } catch {
    history = [];
  }
  if (history.length === 0) {
    if (historySection) historySection.hidden = true;
    return;
  }
  if (historySection) historySection.hidden = false;
  if (historyList) {
    historyList.innerHTML = '';
    history.forEach(item => {
      const li = document.createElement('li');
      const snippet = document.createElement('div');
      snippet.className = 'history-snippet';
      snippet.textContent = item.snippet;
      const date = document.createElement('div');
      date.className = 'history-date';
      date.textContent = item.date;
      li.append(snippet, date);
      li.addEventListener('click', () => {
        document.getElementById('analyzerCard').style.display = 'none';
        displayResults(item.fullData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      historyList.appendChild(li);
    });
  }
}
renderHistory();

// ==========================================
// رفع الصور واستخراج النصوص (OCR)
// ==========================================
const imageInput = document.getElementById('imageInput');
const uploadImageBtn = document.getElementById('uploadImageBtn');
const imageName = document.getElementById('imageName');

if (uploadImageBtn) {
  uploadImageBtn.addEventListener('click', () => { if (imageInput) imageInput.click(); });
}

if (imageInput) {
  imageInput.addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    if (imageName) {
      imageName.textContent = file.name;
      imageName.style.display = 'block';
    }
    try {
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
    } catch (error) {
      console.error(error);
      stopLoadingAnimation();
      document.getElementById('loadingBox').hidden = true;
      document.getElementById('analyzerCard').style.display = 'block';
      showToast(translations[currentLang].error_image, true);
    }
    imageInput.value = '';
  });
  }

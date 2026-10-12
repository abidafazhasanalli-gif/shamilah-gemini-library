const chatForm = document.getElementById("chatForm");
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const apiKeyInput = document.getElementById("apiKeyInput");
const saveApiKeyBtn = document.getElementById("saveApiKeyBtn");
const openAssistantBtn = document.getElementById("openAssistantBtn");
const openAssistantSecondaryBtn = document.getElementById("openAssistantSecondaryBtn");

const STORAGE_KEY = "gemini_library_api_key";

function addMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;

  const bubble = document.createElement("span");
  bubble.textContent = text;
  message.appendChild(bubble);

  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getSavedApiKey() {
  return localStorage.getItem(STORAGE_KEY) || "";
}

function saveApiKey() {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    alert("يرجى إدخال مفتاح Gemini API أولًا.");
    return;
  }

  localStorage.setItem(STORAGE_KEY, apiKey);
  apiKeyInput.value = "";
  addMessage("bot", "تم حفظ مفتاح Gemini API بنجاح. يمكنك الآن استخدام المساعد الذكي.");
}

function buildDemoReply(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes("كتاب") || lowerPrompt.includes("أقترح") || lowerPrompt.includes("توصية")) {
    return "أقترح عليك: 1) الفقه المقارن 2) التفسير وعلوم القرآن 3) السيرة النبوية. إذا أردت، يمكنني ترتيبها حسب مستوى الدراسة أو حسب موضوعك المحدد.";
  }

  if (lowerPrompt.includes("خطة") || lowerPrompt.includes("دراسة")) {
    return "خطة دراسة ممتازة لمدة 30 يومًا: الأسبوع الأول: مقدمة في التفسير، الأسبوع الثاني: الفقه، الأسبوع الثالث: الحديث، الأسبوع الرابع: التطبيق والمراجعة. أستطيع إعداد خطة أكثر تفصيلًا لك.";
  }

  if (lowerPrompt.includes("ملخص") || lowerPrompt.includes("تلخيص")) {
    return "بإمكاننا تلخيص أي كتاب في 5 نقاط رئيسية: الفكرة العامة، أهم المفاهيم، أبرز الفوائد، الملاحظات، والتطبيق العملي. أرسل عنوان الكتاب وسأعطيك ملخصًا سريعًا.";
  }

  if (lowerPrompt.includes("فقه") || lowerPrompt.includes("زكاة") || lowerPrompt.includes("صلاة")) {
    return "للبحث في الفقه، أنصح ببدء القراءة من كتب التمهيد ثم المذهب المختار، ثم مقارنة الأحكام في المسائل المختصة. أستطيع أن أعد لك قائمة مختارة حسب المستوى.";
  }

  return "أستطيع مساعدتك في اختيار الكتب، تلخيصها، إعداد خطط القراءة، أو الإجابة عن أسئلة محددة في التفسير والفقه والحديث. اكتب سؤالك بدقة وسأعطيك إجابة مناسبة.";
}

async function queryGemini(prompt) {
  const apiKey = getSavedApiKey();

  if (!apiKey) {
    return buildDemoReply(prompt);
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{
                text: `أنت مساعد عربي متخصص في المكتبة الشاملة والكتب الإسلامية. أجب على السؤال التالي باللغة العربية فقط، بشكل مختصر وعملي. السؤال: ${prompt}`
              }]
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error("فشل الاتصال بـ Gemini API");
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "عذراً، لم أستطع إنشاء ردّ مناسب في هذه اللحظة.";
    return text.trim();
  } catch (error) {
    console.error(error);
    return buildDemoReply(prompt);
  }
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const prompt = userInput.value.trim();

  if (!prompt) {
    return;
  }

  addMessage("user", prompt);
  userInput.value = "";

  const thinking = document.createElement("div");
  thinking.className = "message bot";
  const bubble = document.createElement("span");
  bubble.textContent = "جاري التفكير...";
  thinking.appendChild(bubble);
  chatWindow.appendChild(thinking);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  const reply = await queryGemini(prompt);

  thinking.remove();
  addMessage("bot", reply);
});

saveApiKeyBtn.addEventListener("click", saveApiKey);

openAssistantBtn.addEventListener("click", () => {
  document.getElementById("assistant").scrollIntoView({ behavior: "smooth" });
  userInput.focus();
});

openAssistantSecondaryBtn.addEventListener("click", () => {
  document.getElementById("assistant").scrollIntoView({ behavior: "smooth" });
  userInput.focus();
});

apiKeyInput.value = getSavedApiKey();

if (apiKeyInput.value) {
  apiKeyInput.value = "";
  addMessage("bot", "تم تفعيل وضع Gemini إذا رغبت في استخدامه. اكتب سؤالك في المربع أدناه.");
} else {
  addMessage("bot", "يمكنك الدردشة مباشرة بدون مفتاح API، أو إدخال مفتاح Gemini API لاستخدام المساعد الحقيقي.");
}





























































































































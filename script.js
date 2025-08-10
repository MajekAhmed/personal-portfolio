// === 1. زرار تغيير الوضع ===
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    document.body.classList.toggle("bg-light");

    if (themeBtn.textContent.includes("🌙")) {
        themeBtn.textContent = "☀️ الوضع الفاتح";
        themeBtn.classList.replace("btn-light", "btn-warning");
    } else {
        themeBtn.textContent = "🌙 الوضع الداكن";
        themeBtn.classList.replace("btn-warning", "btn-light");
    }
});

// === 2. حساب العمر ===
const birthYear = 2000; // غيّرها لسنة ميلادك
const age = new Date().getFullYear() - birthYear;
document.getElementById("age").textContent = age;

// === 3. أنيميشن عند التمرير ===
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);
// === 4. تفاعل مع زر الإعجاب ===
const likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
    if (likeBtn.classList.contains("liked")) {
        likeBtn.textContent = "❤️ أعجبني";
    } else {
        likeBtn.textContent = "👍 أعجبني";
    }
});
// === 5. عرض الوقت الحالي ===
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    document.getElementById("current-time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();
// === 6. عرض رسالة ترحيبية ===
const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = `مرحبًا بك في موقعنا! اليوم هو ${new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. استمتع بتصفح الموقع!`;
// === 7. تفاعل مع زر المشاركة ===
const shareBtn = document.getElementById("share-btn");
shareBtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: 'مشاركتي',
            text: 'تفاصيل رائعة!',
            url: window.location.href
        }).then(() => {
            console.log('تمت المشاركة بنجاح');
        }).catch((error) => {
            console.error('خطأ في المشاركة:', error);
        });
    } else {
        alert('مشاركة غير مدعومة في هذا المتصفح.');
    }
});
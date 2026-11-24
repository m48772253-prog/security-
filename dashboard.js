
const attemptsElement = document.getElementById("attempts");
const correctElement = document.getElementById("correct");
const percentageElement = document.getElementById("percentage");
const progress = document.getElementById("progress");
const message = document.getElementById("message");
const clearButton = document.getElementById("clear");

function loadStats() {
  const stats = JSON.parse(
    localStorage.getItem("cyberLabStats") ||
    '{"attempts":0,"correct":0}'
  );

  const percentage = stats.attempts
    ? Math.round((stats.correct / stats.attempts) * 100)
    : 0;

  attemptsElement.textContent = stats.attempts;
  correctElement.textContent = stats.correct;
  percentageElement.textContent = percentage + "%";

  progress.style.width = percentage + "%";

  message.textContent = stats.attempts
    ? "نتائج الاختبارات في هذا المتصفح."
    : "لم تبدأ أي محاولة بعد.";
}

clearButton.addEventListener("click", () => {
  if (!confirm("هل تريد مسح الإحصائيات المحلية؟")) return;

  localStorage.removeItem("cyberLabStats");
  loadStats();
});

loadStats();


const choices = document.querySelectorAll(".choice");
const feedback = document.getElementById("feedback");
const reset = document.getElementById("reset");

let answered = false;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    if (answered) return;

    answered = true;

    const correct = choice.dataset.answer === "correct";

    const oldStats = JSON.parse(
      localStorage.getItem("cyberLabStats") ||
      '{"attempts":0,"correct":0}'
    );

    oldStats.attempts++;

    if (correct) oldStats.correct++;

    localStorage.setItem(
      "cyberLabStats",
      JSON.stringify(oldStats)
    );

    feedback.textContent = correct
      ? "إجابة صحيحة! لا تفتح الروابط المشبوهة وتحقق دائماً من المصدر."
      : "إجابة غير صحيحة. التصرف الآمن هو التحقق من المصدر قبل فتح الرابط.";

    feedback.style.color = correct
      ? "#65dda0"
      : "#f0b76c";

    choices.forEach(button => {
      button.disabled = true;
    });

    reset.hidden = false;
  });
});

reset.addEventListener("click", () => {
  answered = false;

  feedback.textContent = "";
  reset.hidden = true;

  choices.forEach(button => {
    button.disabled = false;
  });
});

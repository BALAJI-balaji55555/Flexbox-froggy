function checkAnswer() {
  const code = document.getElementById("code").value;
  const pond = document.querySelector(".pond");
  const feedback = document.getElementById("feedback");

  // Reset previous styles
  pond.style.justifyContent = "flex-start";

  try {
    // Apply user code as Flexbox CSS
    const rules = code.split(";");
    rules.forEach(rule => {
      if (rule.trim() !== "") {
        const [property, value] = rule.split(":").map(s => s.trim());
        pond.style[property] = value;
      }
    });

    // Check if frog and lilypad align
    const frog = document.getElementById("frog");
    const target = document.getElementById("target");

    const frogRect = frog.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const distance = Math.abs(frogRect.left - targetRect.left);

    if (distance < 10) {
      feedback.textContent = "🎉 Correct! You helped the frog!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Try again. Use Flexbox to align!";
      feedback.style.color = "red";
    }

  } catch (error) {
    feedback.textContent = "⚠️ Invalid CSS. Please try again.";
    feedback.style.color = "orange";
  }
}


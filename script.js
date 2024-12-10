function toggleAnswer(index) {
  const answerElement = document.getElementById(`answer-${index}`);

  // Toggle visibility
  if (answerElement.style.display === "block") {
    answerElement.style.display = "none";
  } else {
    answerElement.style.display = "block";
  }
}

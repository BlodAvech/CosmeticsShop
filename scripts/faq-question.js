let questions = document.querySelectorAll('.faq-question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    let answer=question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    }
    else {
      answer.style.display = "block";
    }
  });
});


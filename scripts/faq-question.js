const questions = document.querySelectorAll('.faq-question');

for (let q of questions) {
  q.onclick = () => q.parentElement.classList.toggle('active');
};


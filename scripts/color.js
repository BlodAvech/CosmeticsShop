document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("colorBtn");

  if (btn) {
    let isDarkPink = false;

    btn.addEventListener("click", function() {
      if (!isDarkPink) {
        document.body.style.backgroundColor = "#de3ca3ff"; // dark pink
        document.body.style.transition = "background-color 0.5s ease";
        isDarkPink = true;
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "background-color 0.5s ease";
        isDarkPink = false;
      }
    });
  }
});

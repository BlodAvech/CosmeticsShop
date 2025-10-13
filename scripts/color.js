document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("colorBtn");

  if (btn) {
    let isDarkPink = false;
     
    btn.addEventListener("click", function() {
    
        document.body.style.backgroundColor = (isDarkPink) ? "white": "#de3ca3ff"; // dark pink
        document.body.style.transition = "background-color 0.5s ease";
        isDarkPink = true;
     
    });
  }
});

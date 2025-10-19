document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("colorBtn");

  if (btn) {
    let isDarkPink = false;

    btn.addEventListener("click", function() {
      if (isDarkPink) {
       
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#000";
        btn.textContent = "Switch to Dark Pink 💗";
        btn.style.backgroundColor = "#fce4ec";
        btn.style.color = "#000";
        btn.style.fontSize = "18px";
        btn.style.fontWeight = "normal";
      } else {
        document.body.style.backgroundColor = "#de3ca3ff";
        document.body.style.color = "#8f310eff";
        btn.textContent = "Switch to White 🤍";
        btn.style.backgroundColor = "#880e4f";
        btn.style.color = "#491c0bff";
        btn.style.fontSize = "20px";
        btn.style.fontWeight = "bold";
      }

      document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
      isDarkPink = !isDarkPink;
    });
  }
});

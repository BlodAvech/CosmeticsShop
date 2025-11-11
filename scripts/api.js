
async function loadBeautyTip() {
  const tipElement = document.getElementById("beautyTip");
  tipElement.textContent = "Загружаем совет... 💭";

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    tipElement.textContent = `"${data.slip.advice}" 💄`;
  } catch (error) {
    tipElement.textContent = "Извините, сейчас не удалось загрузить совет 💔";
    console.error("API error:", error);
  }
}

document.getElementById("newTip").addEventListener("click", loadBeautyTip);
window.addEventListener("load", loadBeautyTip);


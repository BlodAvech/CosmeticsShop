window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  scrollProgress.style.height = scrollPercent + "%";
});
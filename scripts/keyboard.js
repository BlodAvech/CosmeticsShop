document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".nav .nav_buttons");
  let currentIndex = 0;

  console.log(document.location.href);
  menuLinks.forEach((link , index) => {
    if(link.href == document.location.href)
    {
      currentIndex = index;
    }
  });
  menuLinks[currentIndex].classList.add("focused");

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {

      menuLinks[currentIndex].classList.remove("focused");
      currentIndex = (currentIndex + 1) % menuLinks.length;
      menuLinks[currentIndex].classList.add("focused");
      menuLinks[currentIndex].focus();
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {

      menuLinks[currentIndex].classList.remove("focused");
      currentIndex = (currentIndex - 1 + menuLinks.length) % menuLinks.length;
      menuLinks[currentIndex].classList.add("focused");
      menuLinks[currentIndex].focus();
    } else if (event.key === "Enter") {
      
      menuLinks[currentIndex].click();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const range = button.dataset.range;

      let delay = 0;

      products.forEach(product => {
        const priceText = product.querySelector(".product-price").textContent;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        let showProduct = false;

        switch (range) {
          case "low":
            showProduct = price <= 25;
            break;
          case "mid":
            showProduct = price > 25 && price <= 50;
            break;
          case "high":
            showProduct = price > 50;
            break;
          default:
            showProduct = true;
        } 
        if (showProduct) {
          product.style.display = "block";
          setTimeout(() => {
            product.style.animationDelay = `${delay}s`;
            delay += 0.1;
            product.classList.add("show");
            product.classList.remove("hide");
          }, 10);
        } else {
          product.classList.remove("show");
          product.classList.add("hide");
          setTimeout(() => {
            product.style.display = "none";
          }, 300);
        }
      });
    });
  });
});

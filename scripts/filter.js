document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const range = button.dataset.range;

      products.forEach(product => {
        const priceText = product.querySelector(".product-price").textContent;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));

        switch (range) {
          case "low":
            product.style.display = price <= 25 ? "block" : "none";
            break;
          case "mid":
            product.style.display = price > 25 && price <= 50 ? "block" : "none";
            break;
          case "high":
            product.style.display = price > 50 ? "block" : "none";
            break;
          default:
            product.style.display = "block";
        }
      });
    });
  });
});

class FavoritesCard {
  constructor(name, price, imgSrc) {
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
    this.containerSelector = document.getElementById("favorites-items");
  }

  render() {
    const template = `
      <div class="item">
        <img src="${this.imgSrc}" alt="${this.name}">
        <div class="details">
          <p><strong>${this.name}</strong></p>
          <p>Price: ${this.price}$</p>
        </div>
        <button class="add-to-cart">Add to Cart</button>
        <button class="remove_fav_item">Remove</button>
      </div>
    `;
    this.containerSelector.insertAdjacentHTML("beforeend", template);
  }
}

const cardItems = [
  new FavoritesCard("Unleashia kushon", 25, "https://korealab.by/image/cache/catalog/unleashia/stojkij-tonalnyj-kushon-unleashia-healthy-green-cushion1-800x800.jpg"),
  new FavoritesCard("Romand lipstick", 15, "https://m.media-amazon.com/images/I/71J+T5sMH1L.jpg"),
  new FavoritesCard("Clio mascara", 19, "https://clubclio.shop/cdn/shop/products/02_dfca1019-bd35-4bbc-9ac2-28ce515c8b45_1500x.jpg?v=1665458015"),
  new FavoritesCard("Romand eyeshadow palette", 45, "https://img.joomcdn.net/88764d3ddc98d8c2fb00b6d9ab99ea2360163d1f_original.jpeg"),
  new FavoritesCard("Clio lipstick", 15, "https://cdn1.ozone.ru/s3/multimedia-1-i/7090481934.jpg")
];


if (window.location.pathname.includes("favorites.html")) UpdateUI_Favorites();

function UpdateUI_Favorites() {
  const container = document.getElementById("favorites-items");
  container.innerHTML = "";

  const savedFavs = JSON.parse(localStorage.getItem("favItems")) || [];

  if (savedFavs.length === 0) {

    cardItems.forEach(item => item.render());
  } else {

    savedFavs.forEach(item => {
      const favCard = new FavoritesCard(item.name, item.price, item.imgSrc);
      favCard.render();
    });
  }


 ocument.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
        const itemElement = e.target.closest(".item");
        const name = itemElement.querySelector("strong").textContent.trim();
        const price = itemElement.querySelector("p:nth-child(2)").textContent.replace("Price:", "").replace("$", "").trim();
        const imgSrc = itemElement.querySelector("img").src;

        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const alreadyInCart = cartItems.some(item => item.name === name);

        if (!alreadyInCart) {
            cartItems.push({ name, price, imgSrc });
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            $(".added-to-cart-notification").fadeIn().delay(1500).fadeOut();
        } else {
            alert(`"${name}" already in your Cart.`);
        }
    }

    if (e.target.classList.contains("remove_fav_item")) {
        const itemElement = e.target.closest(".item");
        const name = itemElement.querySelector("strong").textContent.trim();
        itemElement.remove();

        let favItems = JSON.parse(localStorage.getItem("favItems")) || [];
        favItems = favItems.filter(item => item.name !== name);
        localStorage.setItem("favItems", JSON.stringify(favItems));

        $(".remove-notification").fadeIn().delay(2000).fadeOut();
    }
});
}






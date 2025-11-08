class SaleCard
{
	constructor(name, price , salePrice , imgSrc)
	{
		this.name = name;
		this.price = price;
		this.salePrice = salePrice;
		this.imgSrc = imgSrc;
		this.containerSelector = document.getElementById("saleCards");
	
	}

	render()
	{
		const template = `
            <div class="sale-card">
                <img src="${this.imgSrc}">
                <div class="sale-product-info">     
                    <h3>${this.name}</h3>
                    <p><strong>${this.price}$</strong> <span style="color: #db5f9d; text-decoration: line-through;">${this.salePrice}$</span></p>
                    <button class="like">Add to Favorites</button>
                    <button class="cart">Buy Now</button>
                </div>
            </div>
		`;

		this.containerSelector.insertAdjacentHTML("beforeend", template);
	}
}
const cardItems = [
  new SaleCard("Lipstick" , 15 , 25 , "https://avatars.mds.yandex.net/i?id=d6c39f2e3e09bfe1337aeff5f23ff0f96b73d875-4507655-images-thumbs&n=13"),
	new SaleCard("Makeup Fixator" , 18 , 30 , "https://images.faberlic.com/imo/transform/profile=w526/images/fl/TflGoods/_pic//1001112358712_16546108283.jpg"),
	new SaleCard("Palette" , 16 , 28 , "https://resources.cdn-kaspi.kz/img/m/p/h4a/h3f/80681068527646.jpg?format=gallery-large"),
	new SaleCard("Cushion" , 13 , 22 , "https://img.joomcdn.net/346f56c7c04878d38511f669604747bb541b71bb_original.jpeg"),
  new SaleCard("Mascara", 20, 35, "https://images.faberlic.com/imo/transform/profile=w3168/images/fl/TflGoods/_pic//1001244745936_16680036243.jpg"),
  new SaleCard("Eye shadow", 19, 32, "https://images.faberlic.com/imo/transform/profile=w526/images/fl/TflGoods/_pic//1001333587932_16711899347.jpg"),
  new SaleCard("Eyeliner", 14, 23,"https://images.faberlic.com/imo/transform/profile=w526/images/fl/TflGoods/_pic//1001450446119_16854545091.jpg"),
  new SaleCard("Highlighter", 17, 24, "https://images.faberlic.com/imo/transform/profile=w526/images/fl/TflGoods/_pic//1001312189970_16444795091.jpg"),
  new SaleCard("Powder", 21, 36, "https://images.faberlic.com/imo/transform/profile=w3168/images/fl/TflGoods/_pic//1001657268519_17598376401.jpg"),
  new SaleCard("BB cream", 22, 34, "https://images.faberlic.com/imo/transform/profile=w3168/images/fl/TflGoods/_pic//1001581641965_17077471022.jpg")
];


if (window.location.pathname.includes("sale.html")) {
  cardItems.forEach(item => item.render());

  document.addEventListener("click", e => {
    const btn = e.target;
    const card = btn.closest(".sale-card");
    if (!card) return;

    const name = card.querySelector("h3").textContent.trim();
    const price = card.querySelector("strong").textContent.replace("$", "").trim();
    const imgSrc = card.querySelector("img").src;

    if (btn.classList.contains("like")) {
      let favItems = JSON.parse(localStorage.getItem("favItems")) || [];
      if (!favItems.some(item => item.name === name)) {
        favItems.push({ name, price, imgSrc });
        localStorage.setItem("favItems", JSON.stringify(favItems));
      } 
      else alert(`${name} already in Favorites`);
    }

    if (btn.classList.contains("cart")) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      if (!cartItems.some(item => item.name === name)) {
        cartItems.push({ name, price, imgSrc });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } 
      else alert(`${name} already in Cart`);
    }
  });
}
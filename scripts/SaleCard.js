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


if (window.location.pathname.includes("sale.html")) UpdateUI();

function UpdateUI()
{
  cardItems.forEach(item => item.render());
	document.addEventListener("click", function (e) {
		if (e.target.classList.contains("like")) {
			const card = e.target.closest(".sale-card");
			const name = card.querySelector("h3").textContent;
			const price = card.querySelector("strong").textContent.replace("$", "");
			const imgSrc = card.querySelector("img").src;

			const favItems = JSON.parse(localStorage.getItem("favItems")) || [];
			favItems.push({ name: name, price: price, imgSrc: imgSrc });
			localStorage.setItem("favItems", JSON.stringify(favItems));

		}
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("like")) {
        const card = e.target.closest(".sale-card");
        const name = card.querySelector("h3").textContent.trim();
        const price = card.querySelector("strong").textContent.replace("$", "").trim();
        const imgSrc = card.querySelector("img").src;

        const favItems = JSON.parse(localStorage.getItem("favItems")) || [];

        const alreadyFav = favItems.some(item => item.name === name);
        if (!alreadyFav) {
          favItems.push({ name, price, imgSrc });
          localStorage.setItem("favItems", JSON.stringify(favItems));
        } 
        else {
          alert(`"${name}" is already in your Favorites.`);
        }
      }
      if (e.target.classList.contains("cart")) {
        const card = e.target.closest(".sale-card");
        const name = card.querySelector("h3").textContent.trim();
        const price = card.querySelector("strong").textContent.replace("$", "").trim();
        const imgSrc = card.querySelector("img").src;

        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const alreadyInCart = cartItems.some(item => item.name === name);
        if (!alreadyInCart) {
          cartItems.push({ name, price, imgSrc });
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } 
        else {
            alert(`${name}" is already in your Cart.`);
          }
        }
      });
    });
  }
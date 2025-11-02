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

//	new SaleCard("" , 0 , 0 , "");

const cardItems = [
	new SaleCard("Lipstick" , 15 , 25 , "https://avatars.mds.yandex.net/i?id=d6c39f2e3e09bfe1337aeff5f23ff0f96b73d875-4507655-images-thumbs&n=13"),
	new SaleCard("Cushion" , 18 , 30 , "https://avatars.mds.yandex.net/i?id=a7a13ffed538684e847072ab6db1863585461106-5222233-images-thumbs&n=13"),
	new SaleCard("Palette" , 16 , 28 , "https://resources.cdn-kaspi.kz/img/m/p/h4a/h3f/80681068527646.jpg?format=gallery-large"),
	new SaleCard("Cushion" , 13 , 22 , "https://img.joomcdn.net/346f56c7c04878d38511f669604747bb541b71bb_original.jpeg"),
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

		if (e.target.classList.contains("cart")) {
			const card = e.target.closest(".sale-card");
			const name = card.querySelector("h3").textContent;
			const price = card.querySelector("strong").textContent.replace("$", "");
			const imgSrc = card.querySelector("img").src;

			const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
			cartItems.push({ name: name, price: price, imgSrc: imgSrc });
			localStorage.setItem("cartItems", JSON.stringify(cartItems));

		}
	});
}



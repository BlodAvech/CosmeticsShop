class CartCard
{
	constructor(name, price, imgSrc , amount = 1)
	{
		this.name = name;
		this.price = price;
		this.imgSrc = imgSrc;
		this.amount = amount;
		this.containerSelector = document.getElementById("cart_cards_container");
	
	}

	render()
	{
		const template = `
            <div class="item">
                <img src="${this.imgSrc}" alt="${this.name}">
                <div class="details">
                    <p><strong>${this.name}</strong></p>
                    <p>Price: <span class ="cart_item_price">${this.price}</span>$</p>
                    <input type="number" value="${this.amount}" name = "cart_item_amount" min = "0">
                    <button class="cart_item_remove">Remove</button>
                </div>
            </div>
		`;

		this.containerSelector.insertAdjacentHTML("beforeend", template);
	}
}


cartItems = [
	new CartCard("Amuse lipstick", 20, "https://m.media-amazon.com/images/I/31POGD-KlsL._AC_.jpg" , 1),
	new CartCard("Skin1004 Serum", 43, "https://ir.ozone.ru/s3/multimedia-l/6653411373.jpg", 1),
	new CartCard("Amuse eyeshadow palette", 30, "https://cdn1.ozone.ru/s3/multimedia-1-v/7092419899.jpg", 1),
	new CartCard("Clio kushon", 30, "https://toshkent-parfum.uz/media/cache/6a/2f/6a2f325fb5a8a9807d1a1570ebc2e888.webp", 1),
	new CartCard("Celimax toner", 65, "https://imageproxy.wolt.com/menu/menu-images/60fe89dc3b0012d6dc3919da/74fd0dfc-5484-11ef-9df7-4ee43b95cd7f_celimax_dual_barrier_creamy_toner___1_.jpg", 1),
	new CartCard("Pencil for eyebrow", 7, "https://img.joomcdn.net/5d318e600242dcd413986705a50d0b00e7fca557_original.jpeg", 1),
	new CartCard("Raund lab cleanser foam", 25, "https://a.lmcdn.ru/product/M/P/MP002XW13FNP_25478400_1_v2_2x.jpg", 1),
];

UpdateUI()

function UpdateUI()
{
	cartItems.forEach(cartItem => cartItem.render());

	document.querySelectorAll(".cart_item_remove").forEach(button => {
		button.addEventListener("click", function() {
			this.closest(".item").remove();
		});
	});

	const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
	savedItems.forEach(item => {
    const card = new CartCard(item.name, item.price, item.imgSrc);
    card.render();
});

document.addEventListener("click", function(e) {
	if (e.target.classList.contains("cart_item_remove")) {
        const choice = confirm("Are you sure you want to remove this item from the cart?");
		if (!choice) {
            $(".remove-notification").hide();
            return; 
        }
        const itemElement = e.target.closest(".item");
        const name = itemElement.querySelector("strong").textContent;

        itemElement.remove();

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems = cartItems.filter(item => item.name !== name);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
		
		$(".remove-notification").fadeIn();
        setTimeout(function() {
            $(".remove-notification").fadeOut();
        }, 2000);

		SetInteractives();
	}
});

SetInteractives();
}

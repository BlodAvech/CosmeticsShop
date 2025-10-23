class ProductCard
{
	constructor(name , price , imageSrcs)
	{
		this.name = name;
		this.price = price;
		this.imageSrcs = imageSrcs;
		this.containerSelector =  document.getElementById("products_cards_container");
	}

	render()
	{
		const template = `
		<div class="product-card">
			<img data-src="${this.imageSrcs}" alt="${this.name}" class="product-img lazy">
			<h3 class="product-name">${this.name}</h3>
			<p class="product-price">Price: $${this.price}</p>
			<button class="btn-cart">Add to Cart</button>
			<button class="btn-like">Liked</button>
		</div>
		`;

		this.containerSelector.insertAdjacentHTML("beforeend", template);
	}
}

//	new ProductCard("", 0, ""),

	const products = [
		new ProductCard("Kushon", 15, "img/kushon.png"),
		new ProductCard("Toner", 65, "https://imageproxy.wolt.com/menu/menu-images/60fe89dc3b0012d6dc3919da/74fd0dfc-5484-11ef-9df7-4ee43b95cd7f_celimax_dual_barrier_creamy_toner___1_.jpg"),
		new ProductCard("Lipstick", 25, "img/lipstic.png"),
		new ProductCard("Serum", 21, "https://img.joomcdn.net/b1970bab3307267165e2ac570f43d0d25b9a4d09_original.jpeg"),
		new ProductCard("Cleanser foam", 40, "https://basket-15.wbbasket.ru/vol2200/part220005/220005288/images/big/1.webp"),
		new ProductCard("Palette", 42, "img/palitr.png"),
		new ProductCard("Skin1004 Serum", 43, "https://ir.ozone.ru/s3/multimedia-l/6653411373.jpg"),
		new ProductCard("Lash", 57 , "img/lash.png"),
		new ProductCard("Cleanser Foam", 25 , "https://a.lmcdn.ru/product/M/P/MP002XW13FNP_25478400_1_v2_2x.jpg"),
		new ProductCard("lip pencil", 10 , "https://avatars.mds.yandex.net/i?id=1991f27e6801d80dec29c0d7f23fa39c9e85d6ab-3618094-images-thumbs&n=13"),
		new ProductCard("SPF", 55 , "https://ir-3.ozone.ru/s3/multimedia-1/c1000/6833249353.jpg"),
		new ProductCard("Foundation cream", 40 , "https://img.joomcdn.net/3366db6e40c6ac89897ed3029be903cb499e15c9_original.jpeg"),
		new ProductCard("Cream", 70, "https://avatars.mds.yandex.net/i?id=fca68245a037f558cda34e4f3df38003_l-5192485-images-thumbs&n=13"),
		new ProductCard("Amuse palette", 45 , "https://www.letu.ru/common/img/pim/2025/07/TL_8cd315c1-9627-4c39-969a-12db64ecd110.jpg"),
		new ProductCard("Toner pade", 45 , "https://cdn.100sp.ru/pictures/1806515434"),
	]

	for(let i = 0 ; i < 1000 ; i++)
	{
		products.push(new ProductCard("Kushon", 15, "img/kushon.png"));
	}
	products.forEach(product => product.render());
const totalPrice = document.querySelector('#cart_totalprice');


OnCartItemAmountChanged();

function OnCartItemAmountChanged()
{
	let amountInputs = document.querySelectorAll('input[name="cart_item_amount"]');
	let prices = document.querySelectorAll('.cart_item_price');
	let sum = 0;

	for(let i = 0 ; i < amountInputs.length ; i++)
	{
		sum += Math.max(+amountInputs[i].value , 0) * +prices[i].textContent;
	}

	totalPrice.textContent = sum;
}

function SetInteractives()
{
	amountInputs = document.querySelectorAll('input[name="cart_item_amount"]');
	prices = document.querySelectorAll('.cart_item_price');

	OnCartItemAmountChanged();

	amountInputs.forEach((input , index) => {
		input.addEventListener('input',() => OnCartItemAmountChanged());
	});
}


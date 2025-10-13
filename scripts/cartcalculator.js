const amountInputs = document.querySelectorAll('input[name="cart_item_amount"]');
const prices = document.querySelectorAll('.cart_item_price');
const totalPrice = document.querySelector('#cart_totalprice');
const removeButtons = document.querySelectorAll('.cart_item_remove');

OnCartItemAmountChanged();

function OnCartItemAmountChanged()
{
	let sum = 0;

	for(let i = 0 ; i < amountInputs.length ; i++)
	{
		sum += Math.max(+amountInputs[i].value , 0) * +prices[i].textContent;
	}

	totalPrice.textContent = sum;
}

removeButtons.forEach((button , index) => {
	button.addEventListener('click' , () => {
		amountInputs[index].value = 0;
		OnCartItemAmountChanged();
	});
});

amountInputs.forEach((input , index) => {
	input.addEventListener('input',() => OnCartItemAmountChanged());
});

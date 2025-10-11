const amountInputs = document.querySelectorAll('input[name="cart_item_amount"]');
const prices = document.querySelectorAll('.cart_item_price');
const totalPrice = document.querySelector('#cart_totalprice');
const removeButtons = document.querySelectorAll('.cart_item_remove');

OnCartItemAmountChanged()

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

const passwordMinLenth = 8;
const forms = document.querySelectorAll('.form');

forms.forEach(form => {
	form.addEventListener('submit', (e) => {
	e.preventDefault();
	let valid = true;
	let messages = [];

	const inputs = form.querySelectorAll('input[required]');
	const passwordInput = form.querySelector('input[name="password"]');
	const confirmInput = form.querySelector('input[name="confirm_password"]');

	inputs.forEach(input => {
		const value = input.value.trim();

		if (!value) {
			valid = false;
			messages.push(`${input.name} is required`);
			return;
		}

		if (input.type === 'email') {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(value)) {
			valid = false;
			messages.push('Invalid email format');
		}
		}

		if (input.name === 'password' && passwordInput) {
			if (value.length < input.minLength) {
				valid = false;
				messages.push(`Password must be at least ${passwordInput} characters`);
			}
		}
	});

	if (passwordInput && confirmInput) {
		if (passwordInput.value !== confirmInput.value) {
			valid = false;
			messages.push('Passwords do not match');
		}
	}

		if (!valid) {
			alert(messages.join('\n'));
		} else {
			form.submit();
		}
	});
});
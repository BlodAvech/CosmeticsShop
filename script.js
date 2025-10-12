const amountInputs = document.querySelectorAll('input[name="cart_item_amount"]');
const prices = document.querySelectorAll('.cart_item_price');
const totalPrice = document.querySelector('#cart_totalprice');
const removeButtons = document.querySelectorAll('.cart_item_remove');


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

//Form
const passwordMinLenth = 8;
const forms = document.querySelectorAll('form');
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

window.formHasError = false;

forms.forEach(form => {
	form.addEventListener('submit' , (e) => {
		e.preventDefault();
		const nameInput = form.querySelector('#name');
		const emailInput = form.querySelector('#email');
		const passwordInput = form.querySelector('#password');
		const confirmPasswordInput = form.querySelector('#confirm_password');
		
		let log = "";

		window.formHasError = false;

		//Name Input Check
		if(nameInput != null)
		{
			if(!namePattern.test(nameInput.value))
			{
				log += "\n Name can contain only words";
				window.formHasError = true;
			}
		}

		//Email Input Check
		if(emailInput != null)
		{
			if(!emailPattern.test(emailInput.value))
			{
				log += "\n Uncorect email type";
				window.formHasError = true;
			}
		}
		
		//Password Input Check
		if(passwordInput != null)
		{
			if(passwordInput.value.length < passwordMinLenth)
			{
				log += "\n Password can not be less than " + passwordMinLenth;
				window.formHasError = true;
			}
		}

		//ConfirmPassword Input Check
		if(confirmPasswordInput != null)
		{
			if(passwordInput.value != confirmPasswordInput.value)
			{
				log += "\n Passwords is not same";
				window.formHasError = true;
			}
		}

		if(window.formHasError) 
			{
				alert(log);
				if(form.classList.contains('subscribe_form')) onPopupFormSubmit(form , false);
			}
		else 
		{
			if(form.classList.contains('subscribe_form')) 
				{
					onPopupFormSubmit(form , true);
					return;
				}
			form.submit();
		}
	});
});

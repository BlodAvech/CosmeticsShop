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

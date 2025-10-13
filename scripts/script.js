const passwordMinLenth = 8;
const forms = document.querySelectorAll('form');
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


forms.forEach(form => {
	form.addEventListener('submit' , (e) => {
		e.preventDefault();
		const nameInput = form.querySelector('#name');
		const emailInput = form.querySelector('#email');
		const passwordInput = form.querySelector('#password');
		const confirmPasswordInput = form.querySelector('#confirm_password');
		
		let log = "";

		let formHasError = false;

		//Name Input Check
		if(nameInput != null)
		{
			if(!namePattern.test(nameInput.value))
			{
				log += "\n Name can contain only words";
				formHasError = true;
			}
		}

		//Email Input Check
		if(emailInput != null)
		{
			if(!emailPattern.test(emailInput.value))
			{
				log += "\n Uncorect email type";
				formHasError = true;
			}
		}
		
		//Password Input Check
		if(passwordInput != null)
		{
			if(passwordInput.value.length < passwordMinLenth)
			{
				log += "\n Password can not be less than " + passwordMinLenth;
				formHasError = true;
			}
		}

		//ConfirmPassword Input Check
		if(confirmPasswordInput != null)
		{
			if(passwordInput.value != confirmPasswordInput.value)
			{
				log += "\n Passwords is not same";
				formHasError = true;
			}
		}

		if(formHasError) 
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

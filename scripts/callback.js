document.addEventListener('DOMContentLoaded', function() {

  var forms = document.querySelectorAll('form');
  var namePattern = /^[A-Za-z\s]+$/; 
  var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; 

  for (var i = 0; i < forms.length; i++) {
    (function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let nameInput = form.querySelector('#name');
        let emailInput = form.querySelector('#email');
        let messageInput = form.querySelector('#message');

        let name = nameInput ? nameInput.value.trim() : '';
        let email = emailInput ? emailInput.value.trim() : '';
        let message = messageInput ? messageInput.value.trim() : '';
        
        let errors = [];

        if (!name) {
          errors.push('Name is required.');
        } else if (!namePattern.test(name)) {
          errors.push('Name must contain only letters and spaces.');
        }

        if (!email) {
          errors.push('Email is required.');
        } 
        else if (!emailPattern.test(email)) {
          errors.push('Email format is incorrect.');
        }

        if (!message) {
          errors.push('Message cannot be empty.');
        }

        if (errors.length > 0) {
          alert('Please fix the following:\n' + errors.join('\n'));
        } else {
          alert('✅ Message sent successfully!');
          form.reset(); 
        }
      });
    })
    (forms[i]);
  }
});


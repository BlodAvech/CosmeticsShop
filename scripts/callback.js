const form = document.querySelector('.contact-form'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const submitButton = form.querySelector('button[type="submit"]');
    const submitButtonDefaultText = submitButton.textContent;
    submitButton.textContent = 'Отправка...';
    submitButton.disabled = true;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'Contact Form', 
            body: `Имя: ${nameInput.value}, Email: ${emailInput.value}, Сообщение: ${messageInput.value}`,
            userId: 1
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Успех:', data);
        showMessage('Сообщение успешно отправлено!', 'success');
        form.reset(); 
    })
    .catch(error => {
        console.error('Ошибка:', error);
        showMessage('Произошла ошибка при отправке: ' + error.message, 'error');
    })
    .finally(() => {
        submitButton.textContent = submitButtonDefaultText;
        submitButton.disabled = false;
    });
});

function showMessage(text, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message';
    messageDiv.textContent = text;
    
    if (type === 'success') {
        messageDiv.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 12px;
            margin: 15px 0;
            border-radius: 4px;
            border: 1px solid #c3e6cb;
        `;
    } else {
        messageDiv.style.cssText = `
            background: #f8d7da;
            color: #721c24;
            padding: 12px;
            margin: 15px 0;
            border-radius: 4px;
            border: 1px solid #f5c6cb;
        `;
    }

    form.parentNode.insertBefore(messageDiv, form);

    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}
$(document).ready(function () {
    $loginBtn = $("#profile_login_btn");
    $signinBtn = $("#profile_signin_btn");
    $loginPanel = $("#profile_login");
    $signinPanel = $("#profile_signin");
    
    // Создаем элемент для затемнения фона
    $overlay = $('<div class="modal-overlay"></div>');
    $('body').append($overlay);
    
    // CSS для модальных окон и затемнения
    const modalCSS = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: none;
            z-index: 9998;
        }
        #profile_login, #profile_signin {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            z-index: 9999;
            display: none;
            min-width: 300px;
            max-width: 90%;
        }
        body.modal-open {
            overflow: hidden;
        }
    `;
    
    // Добавляем стили
    $('head').append('<style>' + modalCSS + '</style>');

    function openModal($panel) {
        $overlay.css("display", "block");
        $panel.css("display", "flex");
        $('body').addClass('modal-open');
        
        // Фокус на первое поле ввода
        setTimeout(() => {
            $panel.find('input[type="text"], input[type="password"], input[type="email"]').first().focus();
        }, 100);
    }

    function closeModal() {
        $overlay.css("display", "none");
        $loginPanel.css("display", "none");
        $signinPanel.css("display", "none");
        $('body').removeClass('modal-open');
    }

    $loginBtn.click(() => {
        openModal($loginPanel);
    });
    
    $signinBtn.click(() => {
        openModal($signinPanel);
    });

    $overlay.click(closeModal);
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // ESC
            closeModal();
        }
    });
});
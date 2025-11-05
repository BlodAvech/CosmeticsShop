document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        alert("Введите корректный email.");
        return;
    }
    alert("Email принят");
});
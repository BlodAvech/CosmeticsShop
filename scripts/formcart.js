document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        alert("Write correct email.");
        return;
    }
    alert("Email accepted");
});
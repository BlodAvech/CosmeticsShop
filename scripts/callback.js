document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const messagePattern = /^[A-Za-z\s]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    let errors = [];

    if (!namePattern.test(name)) {
      errors.push("Name must contain only letters and spaces.");
    }

    if (!emailPattern.test(email)) {
      errors.push("Email format is incorrect.");
    }
    if (!messagePattern.test(message)) {
      errors.push("Message must contain only letters and spaces.");
    } 

    if (errors.length > 0) {
      alert("Please fix the following:\n" + errors.join("\n"));
    } else {
      alert("✅ Message sent successfully!");
      form.reset();
    }
  });
});

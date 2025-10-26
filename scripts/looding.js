const openBtn = document.getElementById("openpopup");
const popup = document.getElementById("popup");
const form = document.getElementById("subscribeForm");
const submitBtn = document.getElementById("submitSubscribe");
const messageBox = document.getElementById("messageBox");
const closeMsgBtn = document.getElementById("closemessage");

// open popup
openBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// form submit with spinner
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // disable button and show spinner
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="spinner"></span> Please wait…`;

  // simulate loading (like sending data)
  setTimeout(() => {
    popup.style.display = "none"; // hide popup
    messageBox.style.display = "block"; // show message
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit"; // reset button text
    form.reset();
  }, 3000);
});

// close message box
closeMsgBtn.addEventListener("click", () => {
  messageBox.style.display = "none";
});

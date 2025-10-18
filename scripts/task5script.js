let saleEndDate = localStorage.getItem("saleEndDate");
if (!saleEndDate) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 7);
  saleEndDate = newDate.getTime(); 
    localStorage.setItem("saleEndDate", saleEndDate);
}

function updateDateTimeAndCountdown() {
  const now = new Date();
  const nowTime = now.getTime();
  const timeLeft = saleEndDate - nowTime;

  const formattedDate = now.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("datetime").textContent =
    "🕒 Current Date and Time: " + formattedDate;
}
setInterval(updateDateTimeAndCountdown, 1000);
updateDateTimeAndCountdown();

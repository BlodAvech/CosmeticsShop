const saleEndDate = new Date();
saleEndDate.setDate(saleEndDate.getDate() + 7); 

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

  if (timeLeft <= 0) {
    document.getElementById("saleCountdown").textContent = "🎉 The sale has ended!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("saleCountdown").textContent =
    `⏳ Sale ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateDateTimeAndCountdown, 1000);
updateDateTimeAndCountdown();

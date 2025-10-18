let saleEndDate = localStorage.getItem("saleEndDate");
if (!saleEndDate) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 7);
  saleEndDate = newDate.getTime();
  localStorage.setItem("saleEndDate", saleEndDate);
}

function showCurrentTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString(); 
  document.getElementById("datetime").textContent = "🕒 Current Time: " + formattedTime;
}
const timeButton = document.getElementById("showTimeBtn");
timeButton.addEventListener("click", showCurrentTime);


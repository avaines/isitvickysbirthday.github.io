// Get the current date
var currentDate = new Date();

// JS Date is 0 indexed
if (currentDate.getMonth() === 10 && currentDate.getDate() === 17) {
  document.getElementById("status").textContent = "Yes! Happy Birthday Vicky 🎉";
  document.getElementById("image").src = "images/candles_lit.png";
} else {
  document.getElementById("status").textContent = "No 🙁";
  document.getElementById("image").src = "images/candles_unlit.png";
}

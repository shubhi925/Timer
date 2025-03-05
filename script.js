const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const minuteCount = document.createElement("p");
const secondCount = document.createElement("p");

let minuteCounter;
let secondCounter;
let countInterval;

function startCounter() {
  clearInterval(countInterval);

  minuteCounter = parseInt(minutes.value, 10) || 0;
  secondCounter = parseInt(seconds.value, 10) || 0;

  minuteCount.textContent = String(minuteCounter).padStart(2, "0");
  secondCount.textContent = String(secondCounter).padStart(2, "0");

  minutes.replaceWith(minuteCount);
  seconds.replaceWith(secondCount);

  countInterval = setInterval(count, 1000);
}

function count() {
  if (minuteCounter === 0 && secondCounter === 0) {
    clearInterval(countInterval);
    return;
  }

  if (secondCounter === 0 && minuteCounter > 0) {
    minuteCounter--;
    secondCounter = 59;
  } else {
    secondCounter--;
  }

  minuteCount.textContent = String(minuteCounter).padStart(2, "0");
  secondCount.textContent = String(secondCounter).padStart(2, "0");
}

function resetCounter() {
  clearInterval(countInterval);

  minuteCount.replaceWith(minutes);
  secondCount.replaceWith(seconds);

  minutes.value = "";
  seconds.value = "";
}

startBtn.addEventListener("click", startCounter);
resetBtn.addEventListener("click", resetCounter);

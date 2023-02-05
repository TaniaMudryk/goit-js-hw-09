const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  timerId = setInterval(getBgColor, 1000);
  startBtn.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
}

var initialDate = new Date();
var plusTime = addHours(initialDate, 3);
var timerX = null;

setCountDown(plusTime);

function setTimer() {
  const inputValue = document.getElementById("numberInput").value;
  if (!inputValue || inputValue > 23) return;
  plusTime = addHours(new Date(), inputValue);
  clearCustomIntervalTime(plusTime);
}

function addHours(date, hours) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
}

function setCountDown(value) {
  const endTime = value.getTime();
  timerX = setInterval(function () {
    const distance = endTime - new Date().getTime();
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = `
    <div><span>${hours}</span> <span>Hours</span></div>
    <div><span>${minutes}</span> <span>Minutes</span></div>
    <div><span>${seconds}</span> <span>Seconds</span></div>`;

    if (distance < 0) {
      clearInterval(timerX);
      setCountDown(value);
    }
  }, 1000);
}

function clearCustomIntervalTime(value) {
  clearInterval(timerX);
  setCountDown(value);
}

var seconds = document.getElementById("seconds").innerHTML;
var minutes = document.getElementById("minutes").innerHTML;
var hours = document.getElementById("hours").innerHTML;

const audio = new Audio("alarm.mp3");

start.addEventListener("click", () => {
  seconds = document.getElementById("second").value.toString().padStart(2, "0");
  minutes = document.getElementById("minute").value.toString().padStart(2, "0");
  hours = document.getElementById("hour").value.toString().padStart(2, "0");
  if (seconds == 0 && minutes == 0 && hours == 0) {
    alert("Please Enter a Valid Time");
  } else if (seconds > 60 || minutes > 60 || hours > 60) {
    alert("Please Enter a Valid Time");
  } else {
    startTime();
  }
});

var resetToZero = () => {
  seconds = 00;
  minutes = 00;
  hours = 00;
  setInterval(() => {
    audio.pause();
  }, 3000);
  clearInterval(timer);
};

var stop = () => {
  seconds = 00;
  minutes = 00;
  hours = 00;
  clearInterval(timer);
};

var startTime = () => {
  timer = setInterval(() => {
    if (seconds == 0 && minutes == 00 && hours == 00) {
      audio.play();
      resetToZero();
    }
    if (seconds == 0 && (minutes > 0 || hours > 0)) {
      seconds = 60;
    }
    seconds = seconds.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds;
    if (minutes > 0 && seconds == 60) {
      seconds = 60;
      minutes--;
    }
    minutes = minutes.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes;
    if (hours > 0 && minutes == 0) {
      minutes = 59;
      hours--;
    }
    hours = hours.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours;
    seconds--;
  }, 1000);
};

reset.addEventListener("click", () => {
  document.getElementById("second").value = 0;
  seconds = document.getElementById("second").value.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("minute").value.toString().padStart(2, "0");

  document.getElementById("minute").value = 0;
  minutes = document.getElementById("minute").value.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("hour").value = 0;
  document.getElementById("hour").value.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours;

  clearInterval(timer);
});

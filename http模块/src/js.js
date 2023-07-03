var dom = document.getElementById("name");

let timer = 0;
let interval = null;

const timerClock = () => {
  interval = setInterval(() => {
    timer++;
    dom.innerHTML = timer < 10 ? "0" + timer : timer;

    if (timer === 60) {
      clearInterval(interval);
      console.log("计时器已被清理。");
    }
  }, 1000);
};

timerClock();

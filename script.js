document.addEventListener("DOMContentLoaded", () => {
  const span = document.querySelectorAll(".time-display");
  const btnStart = document.getElementById("start");
  const btnStop = document.getElementById("stop");
  const btnReset = document.getElementById("reset");
  let time;
  let ms = 0;
  let s = 0;
  let min = 0;
  let h = 0;

  // Fonction pour mettre à jour le compteur
  function update() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        h += 1;
    }
    span[0].innerHTML = h + ' h';
    span[1].innerHTML = min + ' min';
    span[2].innerHTML = s + ' s';
    span[3].innerHTML = ms + ' ms';
  }

  btnStart.addEventListener("click", () => {
    time = setInterval(update, 100);
    btnStart.disabled = true;
  });

  btnStop.addEventListener("click", () => {
    clearInterval(time);
    btnStart.disabled = false;
  });

  btnReset.addEventListener("click", () => {
    clearInterval(time);
    btnStart.disabled = false;
    ms = 0;
    s = 0;
    min = 0;
    h = 0;
    span[0].innerHTML = h + ' h';
    span[1].innerHTML = min + ' min';
    span[2].innerHTML = s + ' s';
    span[3].innerHTML = ms + ' ms';
  });
});

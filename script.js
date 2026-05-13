let time = 1500;
let timer;
let running = false;

function updateDisplay(){
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    `${minutes}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer(){
  if(running) return;

  running = true;

  timer = setInterval(() => {
    if(time > 0){
      time--;
      updateDisplay();
    }
  },1000);
}

function pauseTimer(){
  clearInterval(timer);
  running = false;
}

function resetTimer(){
  clearInterval(timer);
  running = false;
  time = 1500;
  updateDisplay();
}

updateDisplay();
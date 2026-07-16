const TARGET_DATE = new Date("2026-07-23T00:00:00+06:00");
const START_DATE = new Date("2026-07-16T00:00:00+06:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownEl = document.getElementById("countdown");
const finishMessageEl = document.getElementById("finishMessage");
const progressBarEl = document.getElementById("progressBar");
const progressWrapEl = document.getElementById("progressWrap");

const pad = (value) => String(value).padStart(2, "0");

function updateCountdown() {
  const now = new Date();
  const difference = TARGET_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    countdownEl.hidden = true;
    progressWrapEl.hidden = true;
    finishMessageEl.hidden = false;
    document.title = "Время пришло!";
    clearInterval(timer);
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);

  const totalDuration = TARGET_DATE.getTime() - START_DATE.getTime();
  const elapsed = now.getTime() - START_DATE.getTime();
  const progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  progressBarEl.style.width = `${progress}%`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

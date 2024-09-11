// Initialize countdown time
let countdownTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

const countdown = document.querySelector(".countdown");

// Function to update the countdown
function updateCountdown() {
  let now = new Date().getTime();
  let distance = countdownTime - now;

  // Calculate time left
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
        <div class="time"><span>${days}</span><p>DAYS</p></div>
        <div class="time"><span>${hours}</span><p>HOURS</p></div>
        <div class="time"><span>${minutes}</span><p>MINUTES</p></div>
        <div class="time"><span>${seconds}</span><p>SECONDS</p></div>
    `;

  // If the countdown is over
  if (distance < 0) {
    countdown.innerHTML = `<div class="time"><span>00</span><p>DAYS</p></div>
        <div class="time"><span>00</span><p>HOURS</p></div>
        <div class="time"><span>00</span><p>MINUTES</p></div>
        <div class="time"><span>00</span><p>SECONDS</p></div>`;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

const linesContainer = document.getElementById('falling-lines');
let isRunning = false;

function createLine() {
  const line = document.createElement('div');
  line.classList.add('falling-line');
  line.style.left = Math.random() * 100 + '%';
  line.style.animationDelay = Math.random() * 10 + 's';
  linesContainer.appendChild(line);
}

for (let i = 0; i < 100; i++) {
  createLine();
}

document.addEventListener('click', (event) => {
  if (event.target === linesContainer && !isRunning) {
    const letters = ['E', 'N', 'S'];
    let counter = 0;
    isRunning = true;
    linesContainer.childNodes.forEach((line) => {
      setTimeout(() => {
        line.innerHTML = letters[counter];
        counter = (counter + 1) % letters.length;
        if (counter === 0) {
          // Pause for 10 seconds after the word "ENS" is spelled out
          setTimeout(() => {
            linesContainer.childNodes.forEach((line) => {
              line.innerHTML = '';
            });
            isRunning = false;
          }, 10000);
        }
      }, Math.random() * 1000);
    });
  }
});

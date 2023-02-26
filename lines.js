const linesContainer = document.getElementById('falling-lines');

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
  if (event.target === linesContainer) {
    const letters = ['E', 'N', 'S'];
    let counter = 0;
    linesContainer.childNodes.forEach((line) => {
      setTimeout(() => {
        line.innerHTML = letters[counter];
        counter = (counter + 1) % letters.length;
      }, Math.random() * 1000);
    });
  }
});

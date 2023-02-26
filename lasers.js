class Fountain {
  constructor(options) {
    this.canvas = options.el;
    this.particles = [];
    this.colors = options.colors || ['#000000'];
    this.sizes = options.sizes || [10];
    this.density = options.density || 50;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseDown = false;

    this.ctx = this.canvas.getContext('2d');

    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));

    this.handleResize();
    this.createParticles();
  }

  handleMouseMove(event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  handleMouseDown(event) {
    this.mouseDown = true;
  }

  handleMouseUp(event) {
    this.mouseDown = false;
  }

  handleResize(event) {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    for (let i = 0; i < this.density; i++) {
      const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
      const speedHorz = Math.random() * 10;
      const speedUp = Math.random() * 25;
      const spinVal = Math.random() * 360;
      const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
      const top = this.mouseY - size / 2;
      const left = this.mouseX - size / 2;
      const direction = Math.random() <= 0.5 ? -1 : 1;

      const particle = new this.particleClass({
        top,
        left,
        size,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speedHorz,
        speedUp,
        spinVal,
        spinSpeed,
        direction
      });

      this.particles.push(particle);
    }
  }

  updateParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      particle.update();

      if (particle.top > window.innerHeight) {
        particle.top = -particle.size;
        particle.left = Math.random() * window.innerWidth;
      }

      if (particle.left < -particle.size) {
        particle.left = window.innerWidth;
      }

      if (particle.left > window.innerWidth) {
        particle.left = -particle.size;
      }
    }
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      this.ctx.fillStyle = particle.color;
      this.ctx.fillRect(particle.left, particle.top, particle.size, particle.size);
    }
  }

  animate() {
    if (this.mouseDown) {
      this.createParticles();
    }

    this.updateParticles();
    this.drawParticles();

    requestAnimationFrame(this.animate.bind(this));
  }
}

class LaserParticle {
  constructor(options) {
    this.top = options.top;
    this.left = options.left;
    this.size = options.size;
    this.color = options.color;
    this.speedHorz = options.speedHor

    const MAX_PARTICLES = 1000;
const COLORS = [
  "#4CAF50",
  "#2196F3",
  "#FFEB3B",
  "#FF9800",
  "#9C27B0",
  "#673AB7",
  "#FF5722",
  "#795548",
];
const BACKGROUND_COLOR = "#1f2024";

class Fountain {
  constructor() {
    this.particles = [];
    this.sizes = [15, 20, 25];
    this.mouseX = 0;
    this.mouseY = 0;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });

    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    this.canvas.addEventListener("mousedown", (e) => {
      for (let i = 0; i < 30; i++) {
        this.createParticle();
      }
    });

    this.animate();
  }

  createParticle() {
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const speedHorz = Math.random() * 10;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
    const top = this.mouseY - size / 2;
    const left = this.mouseX - size / 2;
    const direction = Math.random() <= 0.5 ? -1 : 1;

    this.particles.push({
      top,
      left,
      size,
      speedHorz,
      speedUp,
      direction,
      spinVal,
      spinSpeed,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    if (this.particles.length > MAX_PARTICLES) {
      this.particles.shift();
    }
  }

  animate() {
    this.ctx.fillStyle = BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      particle.left += particle.direction * particle.speedHorz;
      particle.top -= particle.speedUp;
      particle.spinVal += particle.spinSpeed;

      this.ctx.fillStyle = particle.color;
      this.ctx.font = particle.size + "px sans-serif";
      this.ctx.translate(particle.left, particle.top);
      this.ctx.rotate((particle.spinVal * Math.PI) / 180);
      this.ctx.fillText("ENS"[i % 3], 0, 0);
      this.ctx.rotate((-particle.spinVal * Math.PI) / 180);
      this.ctx.translate(-particle.left, -particle.top);
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

new Fountain();

// Simple Ping Pong game for the ATI Study Guide
class PingPongGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.state = 'menu'; // menu, playing, paused, gameover
    this.maxScore = 7;

    this.keys = new Set();
    this.lastTime = 0;

    this.player = {
      x: 30,
      y: 0,
      width: 14,
      height: 120,
      speed: 520,
      score: 0
    };

    this.cpu = {
      x: 0,
      y: 0,
      width: 14,
      height: 120,
      speed: 360,
      score: 0
    };

    this.ball = {
      x: 0,
      y: 0,
      radius: 10,
      speed: 460,
      vx: 0,
      vy: 0
    };

    this.resize();
    this.resetBall(Math.random() > 0.5 ? 1 : -1);
    this.centerPaddles();
    this.bindEvents();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    const container = this.canvas.parentElement;
    const maxW = Math.min(container.offsetWidth - 20, 1200);
    const maxH = Math.min(window.innerHeight - 140, 720);
    this.canvas.width = maxW / 16 * 9 > maxH ? maxH / 9 * 16 : maxW;
    this.canvas.height = maxW / 16 * 9 > maxH ? maxH : maxW / 16 * 9;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.player.height = Math.max(90, this.height * 0.18);
    this.cpu.height = this.player.height;
    this.player.x = 30;
    this.cpu.x = this.width - 30 - this.cpu.width;
    this.ball.radius = Math.max(8, this.width * 0.01);

    this.centerPaddles();
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('keydown', (event) => {
      if (['ArrowUp', 'ArrowDown', 'KeyW', 'KeyS', 'Space', 'KeyP'].includes(event.code)) {
        event.preventDefault();
      }

      if (event.code === 'Space') {
        if (this.state === 'menu' || this.state === 'gameover') {
          this.startMatch();
          return;
        }
        if (this.state === 'paused') {
          this.state = 'playing';
          return;
        }
      }

      if (event.code === 'KeyP') {
        if (this.state === 'playing') {
          this.state = 'paused';
          return;
        }
        if (this.state === 'paused') {
          this.state = 'playing';
          return;
        }
      }

      if (this.state === 'playing') {
        this.keys.add(event.code);
      }
    });

    window.addEventListener('keyup', (event) => {
      this.keys.delete(event.code);
    });

    this.canvas.addEventListener('mousemove', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const y = event.clientY - rect.top;
      this.player.y = this.clamp(y - this.player.height / 2, 10, this.height - this.player.height - 10);
    });

    this.canvas.addEventListener('click', () => {
      if (this.state === 'menu' || this.state === 'gameover') {
        this.startMatch();
      }
    });

    this.canvas.addEventListener('touchmove', (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      const rect = this.canvas.getBoundingClientRect();
      const y = touch.clientY - rect.top;
      this.player.y = this.clamp(y - this.player.height / 2, 10, this.height - this.player.height - 10);
    }, { passive: true });
  }

  startMatch() {
    this.player.score = 0;
    this.cpu.score = 0;
    this.state = 'playing';
    this.resetBall(Math.random() > 0.5 ? 1 : -1);
    this.centerPaddles();
  }

  centerPaddles() {
    this.player.y = this.height / 2 - this.player.height / 2;
    this.cpu.y = this.height / 2 - this.cpu.height / 2;
  }

  resetBall(direction) {
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;
    const angle = (Math.random() * 0.5 - 0.25) * Math.PI;
    this.ball.vx = Math.cos(angle) * this.ball.speed * direction;
    this.ball.vy = Math.sin(angle) * this.ball.speed;
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  update(dt) {
    if (this.state !== 'playing') return;

    const moveUp = this.keys.has('ArrowUp') || this.keys.has('KeyW');
    const moveDown = this.keys.has('ArrowDown') || this.keys.has('KeyS');

    if (moveUp) {
      this.player.y -= this.player.speed * dt;
    }
    if (moveDown) {
      this.player.y += this.player.speed * dt;
    }

    this.player.y = this.clamp(this.player.y, 10, this.height - this.player.height - 10);

    const targetY = this.ball.y - this.cpu.height / 2;
    const cpuDelta = this.clamp(targetY - this.cpu.y, -this.cpu.speed * dt, this.cpu.speed * dt);
    this.cpu.y = this.clamp(this.cpu.y + cpuDelta, 10, this.height - this.cpu.height - 10);

    this.ball.x += this.ball.vx * dt;
    this.ball.y += this.ball.vy * dt;

    if (this.ball.y - this.ball.radius <= 8 || this.ball.y + this.ball.radius >= this.height - 8) {
      this.ball.vy *= -1;
      this.ball.y = this.clamp(this.ball.y, 8 + this.ball.radius, this.height - 8 - this.ball.radius);
    }

    if (this.checkPaddleCollision(this.player)) {
      this.ball.vx = Math.abs(this.ball.vx) * 1.03;
      this.applyPaddleSpin(this.player);
    }

    if (this.checkPaddleCollision(this.cpu)) {
      this.ball.vx = -Math.abs(this.ball.vx) * 1.03;
      this.applyPaddleSpin(this.cpu);
    }

    if (this.ball.x + this.ball.radius < 0) {
      this.cpu.score += 1;
      this.checkScore();
      this.resetBall(1);
    }

    if (this.ball.x - this.ball.radius > this.width) {
      this.player.score += 1;
      this.checkScore();
      this.resetBall(-1);
    }
  }

  checkPaddleCollision(paddle) {
    const paddleLeft = paddle.x;
    const paddleRight = paddle.x + paddle.width;
    const paddleTop = paddle.y;
    const paddleBottom = paddle.y + paddle.height;

    return (
      this.ball.x + this.ball.radius >= paddleLeft &&
      this.ball.x - this.ball.radius <= paddleRight &&
      this.ball.y + this.ball.radius >= paddleTop &&
      this.ball.y - this.ball.radius <= paddleBottom
    );
  }

  applyPaddleSpin(paddle) {
    const impact = (this.ball.y - (paddle.y + paddle.height / 2)) / (paddle.height / 2);
    const maxAngle = Math.PI / 3;
    const angle = impact * maxAngle;
    const speed = Math.hypot(this.ball.vx, this.ball.vy);
    const direction = this.ball.vx > 0 ? 1 : -1;
    this.ball.vx = Math.cos(angle) * speed * direction;
    this.ball.vy = Math.sin(angle) * speed;
  }

  checkScore() {
    if (this.player.score >= this.maxScore || this.cpu.score >= this.maxScore) {
      this.state = 'gameover';
    }
  }

  drawBackground() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    gradient.addColorStop(0, '#111827');
    gradient.addColorStop(1, '#1e1b4b');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
    this.ctx.lineWidth = 4;
    this.ctx.setLineDash([16, 18]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.width / 2, 20);
    this.ctx.lineTo(this.width / 2, this.height - 20);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
  }

  drawPaddle(paddle, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
  }

  drawBall() {
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawScore() {
    this.ctx.fillStyle = '#e2e8f0';
    this.ctx.font = '600 32px "Space Grotesk", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.player.score, this.width * 0.25, 60);
    this.ctx.fillText(this.cpu.score, this.width * 0.75, 60);
  }

  drawOverlay() {
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.72)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = '#f8fafc';
    this.ctx.textAlign = 'center';
    this.ctx.font = '700 42px "Space Grotesk", sans-serif';

    let title = 'Ping Pong Showdown';
    let subtitle = 'Press Space or click to serve';

    if (this.state === 'paused') {
      title = 'Paused';
      subtitle = 'Press P or Space to resume';
    }

    if (this.state === 'gameover') {
      title = this.player.score > this.cpu.score ? 'You Win!' : 'CPU Wins';
      subtitle = 'Press Space to play again';
    }

    this.ctx.fillText(title, this.width / 2, this.height / 2 - 20);
    this.ctx.font = '400 22px "Inter", sans-serif';
    this.ctx.fillStyle = '#cbd5f5';
    this.ctx.fillText(subtitle, this.width / 2, this.height / 2 + 20);
  }

  drawHUD() {
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
    this.ctx.fillRect(20, this.height - 62, this.width - 40, 42);

    this.ctx.fillStyle = '#e2e8f0';
    this.ctx.font = '500 18px "Inter", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Move: W/S or ↑/↓   •   Pause: P   •   First to 7 points', this.width / 2, this.height - 34);
  }

  render() {
    this.drawBackground();
    this.drawScore();
    this.drawPaddle(this.player, '#38bdf8');
    this.drawPaddle(this.cpu, '#f472b6');
    this.drawBall();
    this.drawHUD();

    if (this.state !== 'playing') {
      this.drawOverlay();
    }
  }

  loop(timestamp) {
    const delta = Math.min((timestamp - this.lastTime) / 1000, 0.02);
    this.lastTime = timestamp;

    this.update(delta);
    this.render();

    requestAnimationFrame(this.loop);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;
  new PingPongGame(canvas);
});

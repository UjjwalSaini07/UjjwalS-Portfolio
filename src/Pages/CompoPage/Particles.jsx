import React, { useEffect, useRef } from 'react';
import image1 from './AssetPic/Img1.jpg';
// import image1 from './img4.jpg';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });

    function canvasSizes(canvas) {
      if (window.innerWidth < 800) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth;
      } else {
        canvas.height = window.innerHeight;
        canvas.width = window.innerHeight;
      }
    }

    if (canvas) {
      canvasSizes(canvas);
    }

    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * this.effect.w;
        this.y = Math.random() * this.effect.h;
        this.originx = Math.floor(x);
        this.originy = Math.floor(y);
        this.color = color;
        this.velocity = Math.random() * 0.5;
        this.size = this.effect.gap;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.4;
        this.dx = 0;
        this.dy = 0;
        this.dist = 0;
        this.force = 0;
        this.angle = 0;
        this.friction = 0.7;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.dist = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        this.force = -this.effect.mouse.radius / this.dist;

        if (this.dist < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originx - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originy - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(width, height) {
        this.w = width;
        this.h = height;
        this.img = null; // Image will be loaded later
        this.gap = 3;
        this.particleArray = [];
        this.centerx = this.w * 0.5;
        this.centery = this.h * 0.5;
        this.x = this.centerx;
        this.y = this.centery;
        this.mouse = { radius: 1000, x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
          const bounds = canvas.getBoundingClientRect();
          this.mouse.x = e.clientX - bounds.left;
          this.mouse.y = e.clientY - bounds.top;
        });
      }

      init(ctx) {
        const image = new Image();
        image.src = image1; // Use the imported image1
        image.onload = () => {
          this.img = image;
          ctx.drawImage(this.img, 0, 0, this.w, this.h);
          const pixels = ctx.getImageData(0, 0, this.w, this.h).data;

          for (let y = 0; y < this.h; y += this.gap) {
            for (let x = 0; x < this.w; x += this.gap) {
              const index = (y * this.w + x) * 4;
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const alpha = pixels[index + 3];

              const color = `rgba(${red},${green},${blue},${alpha / 255})`;
              if (alpha > 0) {
                this.particleArray.push(new Particle(this, x, y, color));
              }
            }
          }
        };
      }

      draw(ctx) {
        this.particleArray.forEach((particle) => particle.draw(ctx));
      }

      update() {
        this.particleArray.forEach((particle) => particle.update());
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    if (ctx) {
      effect.init(ctx);
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, []);

  return (
    <div>
      <div className="h-full w-full canvas-container">
        <canvas id="Canvas" ref={canvasRef}></canvas>
        <img alt="avatar" className='hidden' id="image1" src={image1} />
      </div>
    </div>
  );
};

export default Canvas;



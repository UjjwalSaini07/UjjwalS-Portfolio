// TOdo: Bounded in W*H

// import React, { useEffect, useRef } from 'react';
// import image1 from './AssetPic/Img3.jpg';

// const Canvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d', { willReadFrequently: true });

//     const resizeCanvas = () => {
//       if (canvas) {
//         canvas.width = canvas.parentElement.clientWidth;
//         canvas.height = canvas.parentElement.clientHeight;
//       }
//     };

//     class Particle {
//       constructor(effect, x, y, color) {
//         this.effect = effect;
//         this.x = Math.random() * effect.width;
//         this.y = Math.random() * effect.height;
//         this.originx = Math.floor(x);
//         this.originy = Math.floor(y);
//         this.color = color;
//         this.size = effect.gap;
//         this.vx = 0;
//         this.vy = 0;
//         this.ease = 0.4;
//         this.friction = 0.7;
//       }

//       draw(ctx) {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.size, this.size);
//       }

//       update() {
//         const { mouse } = this.effect;
//         const dx = mouse.x - this.x;
//         const dy = mouse.y - this.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         const force = -mouse.radius / dist;

//         if (dist < mouse.radius) {
//           const angle = Math.atan2(dy, dx);
//           this.vx += force * Math.cos(angle);
//           this.vy += force * Math.sin(angle);
//         }

//         this.x += (this.vx *= this.friction) + (this.originx - this.x) * this.ease;
//         this.y += (this.vy *= this.friction) + (this.originy - this.y) * this.ease;
//       }
//     }

//     class Effect {
//       constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.gap = 3;
//         this.particleArray = [];
//         this.mouse = { radius: 1000, x: 0, y: 0 };

//         window.addEventListener('mousemove', this.handleMouseMove.bind(this));
//       }

//       handleMouseMove(event) {
//         const bounds = canvas.getBoundingClientRect();
//         this.mouse.x = event.clientX - bounds.left;
//         this.mouse.y = event.clientY - bounds.top;
//       }

//       init(ctx) {
//         const image = new Image();
//         image.src = image1;
//         image.onload = () => {
//           ctx.drawImage(image, 0, 0, this.width, this.height);
//           const pixels = ctx.getImageData(0, 0, this.width, this.height).data;

//           for (let y = 0; y < this.height; y += this.gap) {
//             for (let x = 0; x < this.width; x += this.gap) {
//               const index = (y * this.width + x) * 4;
//               const alpha = pixels[index + 3];
//               if (alpha > 0) {
//                 const red = pixels[index];
//                 const green = pixels[index + 1];
//                 const blue = pixels[index + 2];
//                 const color = `rgba(${red},${green},${blue},${alpha / 255})`;
//                 this.particleArray.push(new Particle(this, x, y, color));
//               }
//             }
//           }
//         };
//       }

//       draw(ctx) {
//         this.particleArray.forEach(particle => particle.draw(ctx));
//       }

//       update() {
//         this.particleArray.forEach(particle => particle.update());
//       }
//     }

//     const effect = new Effect(canvas.width, canvas.height);

//     if (ctx) {
//       effect.init(ctx);
//     }

//     const animate = () => {
//       if (ctx) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         effect.draw(ctx);
//         effect.update();
//         requestAnimationFrame(animate);
//       }
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', effect.handleMouseMove.bind(effect));
//     };
//   }, []);

//   return (
//     <div className="canvas-container" style={{ width: '36rem', height: '47.5rem' }}>
//       <canvas id="Canvas" ref={canvasRef}></canvas>
//       <img alt="avatar" className="hidden" src={image1} />
//     </div>
//   );
// };

// export default Canvas;


// ! Unbounded particlate Dimensions- Irrespective of the w*h
// import React, { useEffect, useRef } from 'react';
// import image1 from './AssetPic/Img3.jpg';

// const Canvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d', { willReadFrequently: true });

//     const resizeCanvas = () => {
//       if (canvas) {
//         const size = window.innerWidth < 800 ? window.innerWidth : window.innerHeight;
//         canvas.width = size;
//         canvas.height = size;
//       }
//     };

//     class Particle {
//       constructor(effect, x, y, color) {
//         this.effect = effect;
//         this.x = Math.random() * effect.width;
//         this.y = Math.random() * effect.height;
//         this.originx = Math.floor(x);
//         this.originy = Math.floor(y);
//         this.color = color;
//         this.size = effect.gap;
//         this.vx = 0;
//         this.vy = 0;
//         this.ease = 0.4;
//         this.friction = 0.7;
//       }

//       draw(ctx) {
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.size, this.size);
//       }

//       update() {
//         const { mouse } = this.effect;
//         const dx = mouse.x - this.x;
//         const dy = mouse.y - this.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         const force = -mouse.radius / dist;

//         if (dist < mouse.radius) {
//           const angle = Math.atan2(dy, dx);
//           this.vx += force * Math.cos(angle);
//           this.vy += force * Math.sin(angle);
//         }

//         this.x += (this.vx *= this.friction) + (this.originx - this.x) * this.ease;
//         this.y += (this.vy *= this.friction) + (this.originy - this.y) * this.ease;
//       }
//     }

//     class Effect {
//       constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.gap = 3;
//         this.particleArray = [];
//         this.mouse = { radius: 1000, x: 0, y: 0 };

//         window.addEventListener('mousemove', this.handleMouseMove.bind(this));
//       }

//       handleMouseMove(event) {
//         const bounds = canvas.getBoundingClientRect();
//         this.mouse.x = event.clientX - bounds.left;
//         this.mouse.y = event.clientY - bounds.top;
//       }

//       init(ctx) {
//         const image = new Image();
//         image.src = image1;
//         image.onload = () => {
//           ctx.drawImage(image, 0, 0, this.width, this.height);
//           const pixels = ctx.getImageData(0, 0, this.width, this.height).data;

//           for (let y = 0; y < this.height; y += this.gap) {
//             for (let x = 0; x < this.width; x += this.gap) {
//               const index = (y * this.width + x) * 4;
//               const alpha = pixels[index + 3];
//               if (alpha > 0) {
//                 const red = pixels[index];
//                 const green = pixels[index + 1];
//                 const blue = pixels[index + 2];
//                 const color = `rgba(${red},${green},${blue},${alpha / 255})`;
//                 this.particleArray.push(new Particle(this, x, y, color));
//               }
//             }
//           }
//         };
//       }

//       draw(ctx) {
//         this.particleArray.forEach(particle => particle.draw(ctx));
//       }

//       update() {
//         this.particleArray.forEach(particle => particle.update());
//       }
//     }

//     const effect = new Effect(canvas.width, canvas.height);

//     if (ctx) {
//       effect.init(ctx);
//     }

//     const animate = () => {
//       if (ctx) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         effect.draw(ctx);
//         effect.update();
//         requestAnimationFrame(animate);
//       }
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', effect.handleMouseMove.bind(effect));
//     };
//   }, []);

//   return (
//     <div className="h-full w-full canvas-container">
//       <canvas id="Canvas" ref={canvasRef}></canvas>
//       <img alt="avatar" className="hidden" src={image1} />
//     </div>
//   );
// };

// export default Canvas;

//! COde Smaple Case 2 - More Faster But Image Is Blurry
import React, { useEffect, useRef } from 'react';
import image1 from './AssetPic/Img3.jpg';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });

    const resizeCanvas = () => {
      if (canvas) {
        const size = window.innerWidth < 800 ? window.innerWidth : window.innerHeight;
        canvas.width = size;
        canvas.height = size;
      }
    };

    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.random() * effect.width;
        this.y = Math.random() * effect.height;
        this.originx = Math.floor(x);
        this.originy = Math.floor(y);
        this.color = color;
        this.size = effect.gap;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.2;
        this.friction = 0.85;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        const { mouse } = this.effect;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = -mouse.radius / dist;

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          this.vx += force * Math.cos(angle);
          this.vy += force * Math.sin(angle);
        }

        this.x += (this.vx *= this.friction) + (this.originx - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originy - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.gap = 5;
        this.particleArray = [];
        this.mouse = { radius: 150, x: 0, y: 0 };

        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      }

      handleMouseMove(event) {
        const bounds = canvas.getBoundingClientRect();
        this.mouse.x = event.clientX - bounds.left;
        this.mouse.y = event.clientY - bounds.top;
      }

      init(ctx) {
        const image = new Image();
        image.src = image1;
        image.onload = () => {
          ctx.drawImage(image, 0, 0, this.width, this.height);
          const pixels = ctx.getImageData(0, 0, this.width, this.height).data;

          for (let y = 0; y < this.height; y += this.gap) {
            for (let x = 0; x < this.width; x += this.gap) {
              const index = (y * this.width + x) * 4;
              const alpha = pixels[index + 3];
              if (alpha > 0) {
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const color = `rgba(${red},${green},${blue},${alpha / 255})`;
                this.particleArray.push(new Particle(this, x, y, color));
              }
            }
          }
        };
      }

      draw(ctx) {
        this.particleArray.forEach(particle => particle.draw(ctx));
      }

      update() {
        this.particleArray.forEach(particle => particle.update());
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    if (ctx) {
      effect.init(ctx);
    }

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw(ctx);
        effect.update();
        requestAnimationFrame(animate);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', effect.handleMouseMove.bind(effect));
    };
  }, []);

  return (
    <div className="h-full w-full canvas-container">
      <canvas id="Canvas" ref={canvasRef}></canvas>
      <img alt="avatar" className="hidden" src={image1} />
    </div>
  );
};

export default Canvas;



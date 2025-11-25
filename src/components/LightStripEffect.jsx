import React, { useEffect, useRef } from 'react';

const LightStripEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let strips = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Strip {
            constructor() {
                this.x = -200; // Start off-screen left
                this.width = 100 + Math.random() * 150;
                this.speed = 5 + Math.random() * 10;
                this.opacity = 0;
                this.maxOpacity = 0.1 + Math.random() * 0.2;
                this.fadeIn = true;
                this.tilt = Math.random() * 0.5 - 0.25; // Slight tilt
            }

            draw(ctx) {
                // Update position
                this.x += this.speed;

                // Fade in/out logic
                if (this.fadeIn) {
                    this.opacity += 0.01;
                    if (this.opacity >= this.maxOpacity) this.fadeIn = false;
                } else if (this.x > canvas.width - 200) {
                    this.opacity -= 0.01;
                }

                if (this.opacity < 0) this.opacity = 0;

                ctx.save();
                ctx.beginPath();

                // Create gradient for the strip
                const gradient = ctx.createLinearGradient(this.x, 0, this.x + this.width, 0);
                gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
                gradient.addColorStop(0.5, `rgba(100, 200, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

                ctx.fillStyle = gradient;

                // Draw tilted rect
                ctx.transform(1, 0, this.tilt, 1, 0, 0);
                ctx.fillRect(this.x, 0, this.width, canvas.height);

                ctx.restore();
            }

            isDead() {
                return this.x > canvas.width + 200;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Randomly spawn strips
            if (Math.random() < 0.01) {
                strips.push(new Strip());
            }

            strips = strips.filter(strip => !strip.isDead());
            strips.forEach(strip => strip.draw(ctx));

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
        />
    );
};

export default LightStripEffect;

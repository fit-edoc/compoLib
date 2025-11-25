import React, { useEffect, useRef } from 'react';

const LightningEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let bolts = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Bolt {
            constructor() {
                this.segments = [];
                this.currentX = 0;
                this.currentY = Math.random() * canvas.height;
                this.targetX = canvas.width;
                this.targetY = Math.random() * canvas.height;
                this.life = 0;
                this.maxLife = 30 + Math.random() * 20;
                this.speed = 15 + Math.random() * 10;
                this.width = 2 + Math.random() * 2;
                this.color = `rgba(200, 220, 255, ${0.5 + Math.random() * 0.5})`;

                this.generatePath();
            }

            generatePath() {
                let x = this.currentX;
                let y = this.currentY;

                while (x < this.targetX) {
                    const nextX = x + Math.random() * 50 + 20;
                    const nextY = y + (Math.random() - 0.5) * 100;
                    this.segments.push({ x, y, nextX, nextY });
                    x = nextX;
                    y = nextY;
                }
            }

            draw(ctx) {
                this.life++;
                const opacity = 1 - (this.life / this.maxLife);

                ctx.beginPath();
                ctx.strokeStyle = this.color.replace(/[\d.]+\)$/, `${opacity})`);
                ctx.lineWidth = this.width;
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'green';

                // Draw segments up to current progress
                const drawLimit = Math.min(this.segments.length, Math.floor(this.life * 2)); // Speed of drawing

                for (let i = 0; i < drawLimit; i++) {
                    const seg = this.segments[i];
                    ctx.moveTo(seg.x, seg.y);
                    ctx.lineTo(seg.nextX, seg.nextY);
                }
                ctx.stroke();
            }

            isDead() {
                return this.life >= this.maxLife;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Randomly spawn bolts
            if (Math.random() < 0.02) { // Adjust frequency
                bolts.push(new Bolt());
            }

            bolts = bolts.filter(bolt => !bolt.isDead());
            bolts.forEach(bolt => bolt.draw(ctx));

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
            className="absolute inset-0 z-10 pointer-events-none"
        />
    );
};

export default LightningEffect;

// This file defines the roulette wheel, including its properties and methods for spinning and stopping.

class RouletteWheel {
    constructor(radius) {
        this.radius = radius;
        this.angle = 0;
        this.speed = 0;
        this.isSpinning = false;
    }

    spin(speed) {
        this.speed = speed;
        this.isSpinning = true;
    }

    stop() {
        this.isSpinning = false;
        this.speed = 0;
    }

    update() {
        if (this.isSpinning) {
            this.angle += this.speed;
            this.speed *= 0.99; // Simulate friction
            if (this.speed < 0.1) {
                this.stop();
            }
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.restore();
    }
}
// This file defines the ball's properties and methods, including its movement and interaction with the wheel.

class Ball {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.angle = 0;
    }

    updatePosition() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    resetPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default Ball;
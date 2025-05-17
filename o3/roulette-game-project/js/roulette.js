class Roulette {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.rotationSpeed = 0;
        this.angle = 0;
        this.ballPosition = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.isRotating = false;
        this.ballRadius = 5;
        this.rouletteRadius = this.canvas.width / 2 - 20;
        this.animationFrameId = null;
    }

    startRotation(speed) {
        this.rotationSpeed = speed;
        this.isRotating = true;
        this.animate();
    }

    stopRotation() {
        this.isRotating = false;
        cancelAnimationFrame(this.animationFrameId);
    }

    updateBallPosition() {
        const ballAngle = this.angle + Math.PI / 2; // Adjust for ball starting position
        this.ballPosition.x = this.canvas.width / 2 + this.rouletteRadius * Math.cos(ballAngle);
        this.ballPosition.y = this.canvas.height / 2 + this.rouletteRadius * Math.sin(ballAngle);
    }

    animate() {
        if (this.isRotating) {
            this.angle += this.rotationSpeed;
            this.angle %= (2 * Math.PI); // Keep angle within 0 to 2π
            this.updateBallPosition();
            this.draw();
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawRoulette();
        this.drawBall();
    }

    drawRoulette() {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.rouletteRadius, 0, 2 * Math.PI);
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 5;
        this.context.stroke();
        this.context.closePath();
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.ballPosition.x, this.ballPosition.y, this.ballRadius, 0, 2 * Math.PI);
        this.context.fillStyle = 'red';
        this.context.fill();
        this.context.closePath();
    }
}
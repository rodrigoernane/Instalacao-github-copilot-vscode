const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

let rotationSpeed = 0;
let isSpinning = false;
let ballPosition = 0;
let ballSpeed = 0.1;

function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotationSpeed);
    
    // Draw the roulette wheel
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(0, 0, 150, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw the ball
    ctx.fillStyle = '#ffffff';
    const ballX = 150 * Math.cos(ballPosition);
    const ballY = 150 * Math.sin(ballPosition);
    ctx.beginPath();
    ctx.arc(ballX, ballY, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

function gameLoop() {
    if (isSpinning) {
        rotationSpeed += 0.01; // Increase rotation speed
        ballPosition += ballSpeed; // Update ball position
    }
    drawRoulette();
    requestAnimationFrame(gameLoop);
}

function startRotation() {
    isSpinning = true;
}

function stopRotation() {
    isSpinning = false;
    rotationSpeed = 0; // Reset rotation speed
}

document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        startRotation();
    } else if (event.key === 'e') {
        stopRotation();
    }
});

gameLoop();
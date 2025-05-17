const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const marioImage = new Image();
marioImage.src = 'path/to/mario.png'; // Replace with the actual path to the Mario image

const gravity = 0.5;
const jumpStrength = 10;
let mario = {
    x: 50,
    y: canvas.height / 2,
    width: 40,
    height: 60,
    velocityY: 0,
    isJumping: false
};

let obstacles = [];
let score = 0;
let gameOver = false;

function startGame() {
    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(gameLoop);
}

function handleKeyDown(event) {
    if (event.code === 'Space' && !mario.isJumping) {
        mario.isJumping = true;
        mario.velocityY = -jumpStrength;
    }
}

function update() {
    if (mario.isJumping) {
        mario.velocityY += gravity;
        mario.y += mario.velocityY;

        if (mario.y >= canvas.height - mario.height) {
            mario.y = canvas.height - mario.height;
            mario.isJumping = false;
            mario.velocityY = 0;
        }
    }

    // Update obstacles
    if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - 200) {
        createObstacle();
    }

    obstacles.forEach(obstacle => {
        obstacle.x -= 3; // Move obstacle to the left
        if (obstacle.x + obstacle.width < 0) {
            obstacles.shift(); // Remove off-screen obstacles
            score++;
        }
    });

    checkCollision();
}

function createObstacle() {
    const obstacleHeight = Math.random() * (canvas.height - 20) + 20;
    obstacles.push({
        x: canvas.width,
        y: canvas.height - obstacleHeight,
        width: 20,
        height: obstacleHeight
    });
}

function checkCollision() {
    obstacles.forEach(obstacle => {
        if (mario.x < obstacle.x + obstacle.width &&
            mario.x + mario.width > obstacle.x &&
            mario.y < obstacle.y + obstacle.height &&
            mario.y + mario.height > obstacle.y) {
            gameOver = true;
        }
    });
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(marioImage, mario.x, mario.y, mario.width, mario.height);

    obstacles.forEach(obstacle => {
        ctx.fillStyle = 'green';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);

    if (gameOver) {
        ctx.fillText('Game Over!', canvas.width / 2 - 50, canvas.height / 2);
    }
}

function gameLoop() {
    if (!gameOver) {
        update();
        render();
        requestAnimationFrame(gameLoop);
    }
}

window.onload = startGame;
// physics.js

// Constants
const GRAVITY = 0.5; // Gravity effect on the ball
const FRICTION = 0.99; // Friction coefficient for the ball's movement

// Function to apply gravity to the ball
function applyGravity(ball) {
    ball.velocityY += GRAVITY;
    ball.y += ball.velocityY;
}

// Function to handle ball collision with the wheel
function handleCollision(ball, wheel) {
    // Simple collision detection
    const distance = Math.sqrt((ball.x - wheel.x) ** 2 + (ball.y - wheel.y) ** 2);
    if (distance < wheel.radius) {
        // Reflect the ball's velocity
        ball.velocityY *= -FRICTION;
        ball.y = wheel.y + wheel.radius; // Place the ball on the edge of the wheel
    }
}

// Function to update ball position
function updateBall(ball) {
    applyGravity(ball);
    ball.x += ball.velocityX;
    handleCollision(ball, wheel);
}
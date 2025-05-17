describe('Roulette Game', () => {
    let game;

    beforeEach(() => {
        game = new Game(); // Assuming Game is the main class in game.js
    });

    test('should initialize with default values', () => {
        expect(game.isRunning).toBe(false);
        expect(game.currentBet).toBe(0);
        expect(game.winningNumber).toBe(null);
    });

    test('should start the game', () => {
        game.start();
        expect(game.isRunning).toBe(true);
    });

    test('should stop the game', () => {
        game.start();
        game.stop();
        expect(game.isRunning).toBe(false);
    });

    test('should place a bet', () => {
        game.placeBet(100);
        expect(game.currentBet).toBe(100);
    });

    test('should spin the wheel and get a winning number', () => {
        game.spinWheel();
        expect(game.winningNumber).not.toBe(null);
    });
});
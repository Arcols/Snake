import { mainGame,sendScore } from './Game.js';
import CanvasManager from '../classes/CanvasManager.js';
const size = 750;
const canvasManager = new CanvasManager(size);
canvasManager.initialize();
const cellSize = canvasManager.getCellSize();

const startDiv = document.getElementById('startgame');
const startButton = startDiv.querySelector('button');
startButton.addEventListener('click',() => {
    startDiv.style.visibility = 'hidden';
    mainGame(16, canvasManager.getBoardCanvas());
});

function looseGame(player) {
    sendScore(player.getScore());
    const gameOver = document.getElementById('gameover');
    gameOver.style.visibility = 'visible';
    gameOver.style.opacity = 1;
    const replayButton = gameOver.querySelector('button');
    replayButton.addEventListener('click', () => {
        gameOver.style.visibility = 'hidden';
        mainGame(16, canvasManager.getBoardCanvas());
    });
}

function updateScore(score) {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score: ${score}`;
    scoreDiv.style.display = 'none';
    scoreDiv.offsetHeight; // Force reflow
    scoreDiv.style.display = 'block';
}
const scoreDiv = document.getElementById('score');
scoreDiv.textContent = `Score: `;

window.addEventListener('resize', () => {
    canvasManager.resize();
});

export {cellSize,updateScore,looseGame};
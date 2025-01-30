import { mainGame } from './modules/game/Game.js';
import CanvasManager from './modules/classes/CanvasManager.js'; // Utilisez l'export par défaut
const size = 750;
const canvasManager = new CanvasManager(size);
canvasManager.initialize();
const cellSize = canvasManager.getCellSize();

mainGame(16, canvasManager.getBoardCanvas(), canvasManager.getBackgroundCanvas());

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

export {cellSize,updateScore};
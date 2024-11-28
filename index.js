import { mainGame } from './modules/game/Game.js';
import {draw} from './modules/game/DisplayGame.js';
import CanvasManager from './modules/classes/CanvasManager.js'; // Utilisez l'export par défaut
const size = 750;
const canvasManager = new CanvasManager(size);
canvasManager.initialize();
const cellSize = canvasManager.getCellSize();

// Réajuster le canvas à chaque changement de taille de la fenêtre
window.addEventListener('resize', () => {
    canvasManager.resize();
    //draw();
});

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

export {cellSize,updateScore};
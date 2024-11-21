import { mainGame } from './modules/game/Game.js';

let cellSize;
let boardCanvas;
let boardContext;
let backgroundCanvas;
let backgroundContext;
const cooling = 0.012;
const size = 750;



// Fonction pour redimensionner le canvas
function resizeCanvas() {
    boardCanvas.width = size;
    boardCanvas.height = size;
    boardContext.fillStyle = "rgba(0, 0, 200, 0)";
    boardContext.fillRect(0, 0, boardCanvas.width, boardCanvas.height);

    backgroundCanvas.width = size;
    backgroundCanvas.height = size;
    backgroundContext.fillStyle = "lightgrey";
    backgroundContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

}

function initializeCanvas(canvasElementId) {
    const canvas = document.getElementById(canvasElementId);
    const context = canvas.getContext('2d');
    return { canvas, context };
}

// // popup pour inserer le nombre de cases
// let taille = prompt("Entrez le nombre de cases : ");
// taille = parseInt(taille);
// while(isNaN(taille)){
//     taille = prompt("Entrez le nombre de cases : ");
//     taille = parseInt(taille);
// }

cellSize = size/16;

// Initialiser les canvas
const board = initializeCanvas('board');
boardCanvas = board.canvas;
boardContext = board.context;

const background = initializeCanvas('backgroundboard');
backgroundCanvas = background.canvas;
backgroundContext = background.context;
resizeCanvas();

// Réajuster le canvas à chaque changement de taille de la fenêtre
window.addEventListener('resize', () => {
    resizeCanvas();
    draw();
});  
mainGame(16,board,background);

export {cellSize,size };
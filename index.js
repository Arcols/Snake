import { Player } from './modules/Player.js';
import { draw,drawBlankGrid,cellSize } from './modules/displayGame.js';

let canvas;
let context;
const cooling = 0.012;
const size = 750;
let idInterval;

// Fonction pour redimensionner le canvas
function resizeCanvas() {
    // const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size ;  
    canvas.height = size ;
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

// Fonction pour initialiser le canvas et le contexte
function initializeCanvas(canvasElementId) {
    canvas = document.getElementById(canvasElementId);
    context = canvas.getContext('2d');
}

function startGame(){
    drawBlankGrid();
    let player = new Player();
    player.initialiseFruit();
    return player;
}


function midGame(player){
    draw(player);
    if(player.nextCellIsLoose()){
        clearInterval(idInterval);
    }
    player.moove();
    player.displayGame();
}


function mainGame(){
    let player = startGame();
    idInterval=setInterval(() => {
        midGame(player)
    },1000);
    if(player.isWin()){
        console.log("Vous avez gagné !");
    }else{
        console.log("Tu pues tes morts");
    }
}
initializeCanvas('board'); // Réinitialiser le canvas et le contexte
resizeCanvas();

// Réajuster le canvas à chaque changement de taille de la fenêtre
window.addEventListener('resize', () => {
    resizeCanvas();
    draw();
});  
mainGame();

export { canvas, context };


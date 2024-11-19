import { Player } from './modules/Player.js';
const cooling = 0.012;
const size = 750;
let idInterval;

function startGame(){
    let player = new Player();
    player.initialiseFruit();
    return player;
}


function midGame(player){
    if(player.nextCellIsLoose()){
        clearInterval(idInterval);
    }
    player.moove();
    player.displayGame();
    }

function endGame(){return;}

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
mainGame();

// function draw(){
//     var canvas = document.getElementById("board");
//     var ctx = canvas.getContext("2d");
//     ctx.fillRect()
//     ctx.canvas.height = heightWindow;
// }


// liste du snake
// fonction drawHead
// fonction drawBody
// ATTENTION VERS OU LE BODY OU LA TETE REGARDENT 
// fonction drawFruit
// fonction drawBlankGrid


const canvas = document.getElementById('board');
const context = canvas.getContext('2d');

// Fonction pour redimensionner le canvas
function resizeCanvas() {
    //const size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size ;  
    canvas.height = size ;
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
resizeCanvas();

// Fonction pour charger et dessiner une image
function drawImage(imageSrc, x, y, width, height) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = function() {
        context.drawImage(img, x, y, width, height);
    };
}
function drawGrid(){
    for(let i=0;i<canvas.width;i+=canvas.width/15){
        for(let j=0;j<canvas.height;j+=canvas.height/15){
            drawImage('./pictures/impair.png', i, j, canvas.width/15, canvas.height/15);
            
        }   
    }
}
drawGrid();

// Réajuster le canvas à chaque changement de taille de la fenêtre
window.addEventListener('resize', resizeCanvas);

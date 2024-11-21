import { Player } from "../classes/Player.js";
import { draw,drawBlankGrid } from "./DisplayGame.js";
let idInterval;


function startGame(size,background){
    drawBlankGrid(background);
    let player = new Player(size);
    player.initialiseFruit();
    return player;
}


function midGame(player,board){
    if(player.nextCellIsLoose()){
        clearInterval(idInterval);
    }
    player.moove();
    draw(player,board);
    //player.displayGame();
}
// In : Size (size of the grid)
//      board (Pair of canva and context of board)
//      background (Pair of canva and context of background)
function mainGame(size,board,background){
    let player = startGame(size,background);
    idInterval=setInterval(() => {
        midGame(player,board)
    },250);
    if(player.isWin()){
        console.log("Vous avez gagné !");
    }else{
        console.log("Tu pues tes morts");
    }
}

export { mainGame };
import { Fruit } from './modules/Fruit.js';
import { Player } from './modules/Player.js';
import { Snake } from './modules/Snake.js';
import { Cell,cellsType,toStringCellsType } from './modules/Cell.js';
const cooling = 0.012;

let idInterval;

function startGame(){
    let player = new Player();
    player.initialiseFruit();
    return player;
    // testStartGame(player);
}

function testStartGame(player){
    // let grid = player.getGrid();
    // grid.displayGrid();
    // let snake = player.getSnake();
    // console.log("la tete est :",snake.getHead());
    // console.log("la queue est :",snake.getEndTail());
    // console.log("La liste est : ",snake.getListCells());

    // snake.forwardSnake(snake.getNextCell(player.getGrid()));
    // grid.displayGrid();
    // console.log("la tete est :",snake.getHead());
    // console.log("la queue est :",snake.getEndTail());
    // console.log("La liste est : ",snake.getListCells());

    // snake.forwardSnakeOnEatFruit(snake.getNextCell(player.getGrid()));
    // grid.displayGrid();
    // console.log("la tete est :",snake.getHead());
    // console.log("la queue est :",snake.getEndTail());
    // console.log("La liste est : ",snake.getListCells());

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





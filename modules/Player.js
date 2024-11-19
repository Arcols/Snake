import { Snake,orientation } from './Snake.js'
import { cellsType } from './Cell.js';
import { Grid } from './Grid.js';


class Player{
    constructor(){
        this.grid=new Grid();
        this.placeTheSnake();
        this.score=0;
        this.inputPlayer();
    }

    placeTheSnake(){
        this.snake=new Snake();
        this.snake.addACell(this.grid.getCell(7,4));
        this.snake.addACell(this.grid.getCell(7,3));
        this.snake.addACell(this.grid.getCell(7,2));
    }

    getGrid(){return this.grid;}

    getSnake(){return this.snake;}

    getScore(){return this.score;}

    /*displayGame(){
        this.grid.displayGrid();
    }*/

    moove(){
        let nextCell=this.snake.getNextCell(this.grid);
        if(nextCell.equalsType(cellsType.fruit)){
            this.snake.forwardSnakeOnEatFruit(nextCell);
            this.score++;
            this.grid.placeFruit();
        }else{this.snake.forwardSnake(nextCell)}
    }

    // Return if the next cell is a loose or not
    nextCellIsLoose(){
        let nextCellType = this.snake.getNextCell(this.grid).getCellType();
        if(nextCellType==cellsType.wall 
        || nextCellType==cellsType.snake){
                return true;
            }else{return false;}
    }

    // True if the player have won the game
    isWin(){return this.score==(this.grid.getBaseGridSize()-1)*(this.grid.getBaseGridSize()-1)-3;}

    initialiseFruit(){
        this.grid.placeFruit();
    }

}
    

export { Player };
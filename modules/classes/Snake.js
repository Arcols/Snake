import { cellsType } from './Cell.js';
class Snake {

    constructor(){
        this.listCells=[];
        this.orientation=orientation.east;
    }

    getOrientation(){return this.orientation;}

    getListCells(){return this.listCells;}

    addACell(cell){
        this.listCells.push(cell);
        cell.modifyCellType(cellsType.snake);
    }

    getHead(){return this.listCells[0];}

    getTail(){return this.listCells[this.listCells.length-1];}

    // Get the next cell where the snake will be
    // In : Grid 
    // Out : Cell
    getNextCell(grid){
        let head = this.getHead().getCoordinates();
        switch (this.orientation) {
            case orientation.north :
               return grid.getCell(head[0] - 1,head[1]);
            case orientation.south :
                return grid.getCell(head[0]+1,head[1]);
            case orientation.east :
                return grid.getCell(head[0],head[1]+1);
            case orientation.west :
                return grid.getCell(head[0],head[1]-1);
            default :
                console.log("How the hell did there is another orientation ????");
                break;
        }
    }

    // Move the snake forward
    // To use that method you must first check if the next cell is a wall/snake 
    // In : Cell (the cell in front of the head snake)
    forwardSnake(cell){
        let emptyCell = this.listCells.pop();
        emptyCell.modifyCellType(cellsType.empty);
        cell.modifyCellType(cellsType.snake);
        this.listCells.unshift(cell);
    }

    // Move the snake forward and add a cell
    // To use that method you must first check if the next cell is a fruit
    // In : Cell (the cell in front of the head snake)
    forwardSnakeOnEatFruit(cell){
        cell.modifyCellType(cellsType.snake);
        this.listCells.unshift(cell);
    }

    rotateSnake(orientation){this.orientation=orientation;}

}
const orientation = {
    north : 0,
    east : 1,
    south : 2,
    west : 3
};

export { Snake,orientation };
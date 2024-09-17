class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.isPartOfSnake = false;
    }

    // Modify if the cell is a part of the snake or not
    modifyCell(){
        if(this.isPartOfSnake){
            this.isPartOfSnake=false;
        }else{
            this.isPartOfSnake=true;
        }
    }
}

class Grid {
    
    constructor(){
        this.grid=[];
        for(let row=0;row<this.getBaseGridSize();row++){
            this.grid.push([]);
            for(let col=0;col<this.getBaseGridSize();col++){
                this.grid[row].push(new Cell(row,col));
            }
        }
    }

    searchCell(x,y){return this.grid[x][y];}

    getBaseGridSize(){return 15;}

}

class Snake {

    constructor(){
        this.size=0;
        this.listCells=[];
    }

    // Function that add a cell to our snake
    // In : Cell cell
    addACell(cell){
        this.listCells.push(cell);
        this.size++;
        cell.modifyCell();
    }
}

let grille = new Grid();
console.log(grille.getBaseGridSize());


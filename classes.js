const cellsType = {
    empty : 0,
    fruit : 1,
    snake : 2
};

class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.cellType = cellsType.empty;
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

    getCell(x,y){return this.grid[x][y];}

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

class Fruit {

    constructor(){
        setx(8);
        sety(8);
    }
    setx(x){
        this.x=x
    }
    setx(y){
        this.y=y
    }

    placeFruit(){
        let a = Math.random() * 15;
        return a ;
    }


}
let grille = new Grid();
console.log(grille.getBaseGridSize());
let fruit = new Fruit();
console.log(fruit.placeFruit());

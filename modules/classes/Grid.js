import { Cell,cellsType }from "./Cell.js";
class Grid {
    constructor(size){
        this.baseGridSize=size;
        this.grid=[];
        for(let row=0;row<this.baseGridSize;row++){
            this.grid.push([]);
            for(let col=0;col<this.baseGridSize;col++){
                if(col==0 || row==0 || col==this.baseGridSize-1 || row==this.baseGridSize-1){
                    this.grid[row].push(new Cell(row,col,cellsType.wall));
                }else{
                    this.grid[row].push(new Cell(row,col));
                }
            }
        }
        this.placeFruit();
    }

    getBaseGridSize(){return this.baseGridSize;}

    getCell(x,y){return this.grid[x][y];}

    getFruit(){return this.fruit;}

    // Change a random cell from empty --> fruit
    // In : Grid
    //      Cell
    // Out : Cell modified
    placeFruit(){
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        let x = randomIntFromInterval(0,this.baseGridSize-1); 
        let y = randomIntFromInterval(0,this.baseGridSize-1);
        while(!(this.getCell(x,y).equalsType(cellsType.empty))){
            x = randomIntFromInterval(0,this.baseGridSize-1); 
            y = randomIntFromInterval(0,this.baseGridSize-1);
        };
        this.getCell(x,y).modifyCellType(cellsType.fruit);
        this.fruit=this.getCell(x,y);
    }

    displayGrid(){ 
        console.log("affichage de la grille");
        let gridAux=[]
        for(let row=0;row<this.baseGridSize;row++){
            gridAux.push([])
            for(let col=0;col<this.baseGridSize;col++){
                gridAux[row].push(this.getCell(row,col).getCellType());
            }
        }
        for(let row of gridAux){
            console.log(row);
        };
    }
    
}



export { Grid };
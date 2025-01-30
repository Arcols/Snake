import { Cell,cellsType }from "./Cell.js";
class Grid {
    constructor(size){
        this.baseGridSize=size;
        this.grid=[];
        for(let x=0;x<this.baseGridSize;x++){
            this.grid.push([]);
            for(let y=0;y<this.baseGridSize;y++){
                if(y==0 || x==0 || y==this.baseGridSize-1 || x==this.baseGridSize-1){
                    this.grid[x].push(new Cell(x,y,cellsType.wall));
                }else{
                    this.grid[x].push(new Cell(x,y));
                }
            }
        }
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
        let gridAux=[]
        for(let x=0;x<this.baseGridSize;x++){
            gridAux.push([])
            for(let y=0;y<this.baseGridSize;y++){
                gridAux[x].push(this.getCell(x,y).getCellType());
            }
        }
        for(let x of gridAux){
            console.log(x);
        };
    }
    
}



export { Grid };
import { Cell,cellsType }from "./Cell.js";
class Grid {
    constructor(){
        this.grid=[];
        for(let row=0;row<this.getBaseGridSize();row++){
            this.grid.push([]);
            for(let col=0;col<this.getBaseGridSize();col++){
                if(col==0 || row==0 || col==this.getBaseGridSize()-1 || row==this.getBaseGridSize()-1){
                    this.grid[row].push(new Cell(row,col,cellsType.wall));
                }else{
                    this.grid[row].push(new Cell(row,col));
                }
            }
        }
        this.fruit=this.placeFruit();
    }

    getCell(x,y){return this.grid[x][y];}

    getBaseGridSize(){return 16;}

    getFruit(){
        console.log(this.fruit);
        return this.fruit;
    }

    // Change a random cell from empty --> fruit
    // In : Grid
    //      Cell
    // Out : Cell modified
    placeFruit(){
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        let x = randomIntFromInterval(0,this.getBaseGridSize()-1); 
        let y = randomIntFromInterval(0,this.getBaseGridSize()-1);
        while(!(this.getCell(x,y).equalsType(cellsType.empty))){
            x = randomIntFromInterval(0,this.getBaseGridSize()-1); 
            y = randomIntFromInterval(0,this.getBaseGridSize()-1);
        };
        this.getCell(x,y).modifyCellType(cellsType.fruit);
        return new Cell(x,y,cellsType.fruit);
    }

    // displayGrid(){ 
    //     let gridAux=[]
    //     for(let row=0;row<this.getBaseGridSize();row++){
    //         gridAux.push([])
    //         for(let col=0;col<this.getBaseGridSize();col++){
    //             gridAux[row].push(this.getCell(row,col).getCellType());
    //         }
    //     }
    //     for(let row of gridAux){
    //         console.log(row);
    //     };
    // }
    
}



export { Grid };
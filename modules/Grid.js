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

export { Grid };
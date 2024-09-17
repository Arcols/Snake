class Cell {
    
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.cellType = cellsType.empty;
    }

}
const cellsType = {
    empty : 0,
    fruit : 1,
    snake : 2
};

export { Cell, cellsType };
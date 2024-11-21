class Cell {
    
    constructor(x,y, cellType = cellsType.empty){
        this.x = x;
        this.y = y;
        this.cellType = cellType;
    }

    getX(){return this.x;}

    getY(){return this.y;}

    getCoordinates(){return [this.x, this.y]; }

    getCellType(){return this.cellType;}

    // True if the cell got the same type
    // In : cellsType
    // Out : boolean
    equalsType(typeOfCell){return typeOfCell == this.cellType;}

    // Modify the type of the cell 
    // In : cellsType
    modifyCellType(typeOfCell){
        if(!this.equalsType(typeOfCell)){
            this.cellType=typeOfCell;
        }
    }

}
const cellsType = {
    empty : 0,
    fruit : 1,
    snake : 2,
    wall : 3
};

function toStringCellsType(typeOfCell){
    switch(typeOfCell){
        case cellsType.empty :
            console.log("Empty");
            break;
        case cellsType.fruit : 
            console.log("Fruit");
            break;
        case cellsType.snake :
            console.log("Snake");
            break;
        case cellsType.wall : 
            console.log("Wall");
            break;
        default :
            console.log("UwU");
            break;
    }
}

export { Cell, cellsType, toStringCellsType };
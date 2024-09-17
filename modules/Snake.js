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

export { Snake };
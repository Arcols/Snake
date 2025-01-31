import { initializeCanvas, resizeCanvas } from './canvasFunctions.js';

class CanvasManager {
    constructor(size) {
        this.size = size;
        this.cellSize = size / 16;
        this.boardCanvas = null;
        this.boardContext = null;
    }

    initialize() {
        const board = initializeCanvas('board');
        this.boardCanvas = board.canvas;
        this.boardContext = board.context;

        this.resize();
    }

    resize() {
        resizeCanvas(this.boardCanvas, this.boardContext, this.size);
    }

    getBoardCanvas() {
        return { canvas: this.boardCanvas, context: this.boardContext };
    }
    
    getCellSize() {
        return this.cellSize;
    }

    getSize() {
        return this.size;
    }
}

export default CanvasManager;
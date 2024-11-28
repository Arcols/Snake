import { initializeCanvas, resizeCanvas } from './canvasFunctions.js';

class CanvasManager {
    constructor(size) {
        this.size = size;
        this.cellSize = size / 16;
        this.boardCanvas = null;
        this.boardContext = null;
        this.backgroundCanvas = null;
        this.backgroundContext = null;
    }

    initialize() {
        const board = initializeCanvas('board');
        this.boardCanvas = board.canvas;
        this.boardContext = board.context;

        const background = initializeCanvas('backgroundboard');
        this.backgroundCanvas = background.canvas;
        this.backgroundContext = background.context;

        this.resize();
    }

    resize() {
        resizeCanvas(this.boardCanvas, this.boardContext, this.backgroundCanvas, this.backgroundContext, this.size);
    }

    getBoardCanvas() {
        return { canvas: this.boardCanvas, context: this.boardContext };
    }

    getBackgroundCanvas() {
        return { canvas: this.backgroundCanvas, context: this.backgroundContext };
    }

    getCellSize() {
        return this.cellSize;
    }

    getSize() {
        return this.size;
    }
}

export default CanvasManager;
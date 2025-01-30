import { Snake, orientation } from './Snake.js';
import { cellsType } from './Cell.js';
import { Grid } from './Grid.js';

class Player {
    constructor(size) {
        this.grid = new Grid(size);
        this.placeTheSnake();
        this.score = 0;
        this.latestInput = null; // Variable to store the latest input
        this.inputPlayer();
    }

    placeTheSnake() {
        this.snake = new Snake();
        let center = Math.floor(this.grid.getBaseGridSize() / 2);
        this.snake.addACell(this.grid.getCell(center, center));
        this.snake.addACell(this.grid.getCell(center, center - 1));
        this.snake.addACell(this.grid.getCell(center, center - 2));
    }

    getGrid() { return this.grid; }

    getSnake() { return this.snake; }

    getScore() { return this.score; }

    displayGame() {
        console.log("Affichage de la grille UWU \n");
        this.grid.displayGrid();
    }

    moove() {
        let nextCell = this.snake.getNextCell(this.grid);
        if (nextCell.equalsType(cellsType.fruit)) {
            this.snake.forwardSnakeOnEatFruit(nextCell);
            this.score++;
            this.grid.placeFruit();
        } else {
            this.snake.forwardSnake(nextCell);
        }
    }

    // Return true if the next cell is a loose
    nextCellIsLoose() {
        let nextCellType = this.snake.getNextCell(this.grid).getCellType();
        return nextCellType == cellsType.wall || nextCellType == cellsType.snake;
    }

    // True if the player have won the game
    isWin() {
        return this.score == (this.grid.getBaseGridSize() - 1) * (this.grid.getBaseGridSize() - 1) - 3;
    }

    initialiseFruit() {
        this.grid.placeFruit();
    }

    inputPlayer() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.latestInput = orientation.north;
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.latestInput = orientation.south;
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    this.latestInput = orientation.west;
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    this.latestInput = orientation.east;
                    break;
                default:
                    break;
            }
        });
    }

    processInput() {
        if (this.latestInput !== null) {
            if (this.latestInput === orientation.north && this.snake.getOrientation() !== orientation.south) {
                this.snake.rotateSnake(orientation.north);
            } else if (this.latestInput === orientation.south && this.snake.getOrientation() !== orientation.north) {
                this.snake.rotateSnake(orientation.south);
            } else if (this.latestInput === orientation.west && this.snake.getOrientation() !== orientation.east) {
                this.snake.rotateSnake(orientation.west);
            } else if (this.latestInput === orientation.east && this.snake.getOrientation() !== orientation.west) {
                this.snake.rotateSnake(orientation.east);
            }
            this.latestInput = null; // Clear the latest input after processing
        }
    }
}

export { Player };
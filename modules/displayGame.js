import { canvas, context } from '../index.js';

let cellSize = 750/15;



// Fonction pour charger et dessiner une image
function drawImage(imageSrc, x, y, width, height) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = function() {
        context.drawImage(img, x, y, width, height);
    };
}

function getCellTypeWithCoordinates(x, y, cellSize) {
    if (x === 0 || y === 0 || x === canvas.width - cellSize || y === canvas.height - cellSize) {
        return 'wall';
    } else if ((x / cellSize + y / cellSize) % 2 === 0) {
        return 'pair';
    } else {
        return 'impair';
    }
}

function calculateCoordonatesElementOnGrid(x,y){
    return [x*cellSize,y*cellSize];
}

function drawBody(snake){
    let listCells = snake.getListCells();
    for(let i=1;i<listCells.length;i++){
        let coordinates = calculateCoordonatesElementOnGrid(listCells[i].getCoordinates()[0],listCells[i].getCoordinates()[1]);
        drawImage('./pictures/snakeBody.png',coordinates[1],coordinates[0],cellSize,cellSize);
    }
}
function drawHead(snake){
    let coordinates = calculateCoordonatesElementOnGrid(snake.getHead().getCoordinates()[0],snake.getHead().getCoordinates()[1]);
    drawImage('./pictures/snakeHead.png',coordinates[1],coordinates[0],cellSize,cellSize);
}

function drawFruit(fruit){
    let coordinates = calculateCoordonatesElementOnGrid(fruit.getX(),fruit.getY());
    drawImage('./pictures/apple.png',coordinates[1],coordinates[0],cellSize,cellSize);
}

function drawBlankGrid(){
    for (let x = 0; x< canvas.width; x += cellSize) {
        for (let y = 0; y < canvas.height; y += cellSize) {
            let cellType = getCellTypeWithCoordinates(x, y, cellSize);
            switch (cellType) {
                case 'wall':
                    drawImage('./pictures/purple/wall.png', x, y, cellSize, cellSize);
                    break;
                case 'pair':
                    drawImage('./pictures/purple/pair.png', x, y, cellSize, cellSize);
                    break;
                case 'impair':
                    drawImage('./pictures/purple/impair.png', x, y, cellSize, cellSize);
                    break;
                default :
                    console.log('Bro wtf ???');
            }
        }
    }
}

function draw(player){
    drawBlankGrid();
    drawHead(player.getSnake());
    drawBody(player.getSnake());
    player.getGrid();
}

export { draw, cellSize,drawBlankGrid };
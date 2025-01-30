import { cellSize } from '../../index.js';

// Fonction pour charger et dessiner une image
function drawImage(context,imageSrc, x, y, width, height) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = function() {
        context.drawImage(img, x, y, width, height);
    };
}

function clearSquare(context, x, y, width, height) {
    console.log('clearing square at coordinates : ', x, y);
    context.clearRect(x, y, width, height);
}

function getCellTypeWithCoordinates(tupleCanva,x, y, cellSize) {
    if (x === 0 || y === 0 || x === tupleCanva.canvas.width - cellSize || y === tupleCanva.canvas.height - cellSize) {
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

function drawBody(tupleCanva,snake){
    let listCells = snake.getListCells();
    for(let i=1;i<listCells.length;i++){
        let coordinates = calculateCoordonatesElementOnGrid(listCells[i].getCoordinates()[0],listCells[i].getCoordinates()[1]);
        drawImage(tupleCanva.context,'./ressources/pictures/snakeBody.png',coordinates[0],coordinates[1],cellSize,cellSize);
    }
}

function drawHead(tupleCanva,snake){
    let coordinates = calculateCoordonatesElementOnGrid(snake.getHead().getCoordinates()[0],snake.getHead().getCoordinates()[1]);
    drawImage(tupleCanva.context,'./ressources/pictures/snakeHead.png',coordinates[0],coordinates[1],cellSize,cellSize);
}

function drawFruit(tupleCanva,fruit){
    let coordinates = calculateCoordonatesElementOnGrid(fruit.getX(),fruit.getY());
    drawImage(tupleCanva.context,'./ressources/pictures/fruit.png',coordinates[0],coordinates[1],cellSize,cellSize);
}

function clearTail(tupleCanva,snake){
    let coordinates = calculateCoordonatesElementOnGrid(snake.getTail().getCoordinates()[0],snake.getTail().getCoordinates()[1]);
    clearSquare(tupleCanva.context,coordinates[0],coordinates[1],cellSize,cellSize);
}

function drawBlankGrid(tupleCanva){  
    for (let x = 0; x< tupleCanva.canvas.width; x += cellSize) {
        for (let y = 0; y < tupleCanva.canvas.height; y += cellSize) {
            let cellType = getCellTypeWithCoordinates(tupleCanva,x, y, cellSize);
            switch (cellType) {
                case 'wall':
                    drawImage(tupleCanva.context,'./ressources/pictures/purple/wall.png', x, y, cellSize, cellSize);
                    break;
                case 'pair':
                    drawImage(tupleCanva.context,'./ressources/pictures/purple/pair.png', x, y, cellSize, cellSize);
                    break;
                case 'impair':
                    drawImage(tupleCanva.context,'./ressources/pictures/purple/impair.png', x, y, cellSize, cellSize);
                    break;
                default :
                    console.log('Bro wtf ???');
            }
        }
    }
}

function draw(player,tupleCanva){
    drawBlankGrid(tupleCanva,player.getSnake());
    drawFruit(tupleCanva,player.getGrid().getFruit());
    drawHead(tupleCanva,player.getSnake());
    drawBody(tupleCanva,player.getSnake());
}

export { draw,drawBlankGrid,clearTail };
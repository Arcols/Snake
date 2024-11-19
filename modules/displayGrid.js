let canvas;
let context;

// Fonction pour initialiser le canvas et le contexte
function initializeCanvas(canvasElementId) {
    canvas = document.getElementById(canvasElementId);
    context = canvas.getContext('2d');
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
// Fonction pour charger et dessiner une image
function drawImage(imageSrc, x, y, width, height) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = function() {
        context.drawImage(img, x, y, width, height);
    };
}

function drawGrid() {
    const cellSize = canvas.width / 15;
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
export { initializeCanvas, drawGrid };
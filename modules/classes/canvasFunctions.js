// Fonction pour redimensionner le canvas
function resizeCanvas(boardCanvas, boardContext, size) {
    boardCanvas.width = size;
    boardCanvas.height = size;
    boardContext.clearRect(0, 0, boardCanvas.width, boardCanvas.height); // Effacer le contenu précédent
    boardContext.fillStyle = "rgba(0, 0, 200, 0)";
    boardContext.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
}

// Fonction pour initialiser le canvas et le contexte
function initializeCanvas(canvasElementId) {
    const canvas = document.getElementById(canvasElementId);
    const context = canvas.getContext('2d');
    return { canvas, context };
}

export { resizeCanvas, initializeCanvas };
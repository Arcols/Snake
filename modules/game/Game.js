import { Player } from "../classes/snakeClasses/Player.js";
import { draw, drawBlankGrid } from "./DisplayGame.js";
import { updateScore } from '../../index.js'; 

function startGame(size, background) {
    drawBlankGrid(background);
    let player = new Player(size);
    player.initialiseFruit();
    return player;
}

function looseGame(player, board) {
    const gameOver = document.getElementById('gameover');
    gameOver.classList.add('show');
    const replayButton = gameOver.querySelector('button');
    replayButton.addEventListener('click', () => {
        location.reload();
    });
}

function midGame(player, board, idInterval) {
    player.processInput(); // Process the latest input
    if (player.nextCellIsLoose()) {
        clearInterval(idInterval);
        looseGame(player, board);
    } else if (player.isWin()) {
        console.log("Vous avez gagné !");
        clearInterval(idInterval);
    } else {
        player.moove();
        updateScore(player.getScore());
    }
}

// In : Size (size of the grid)
//      board (Pair of canva and context of board)
//      background (Pair of canva and context of background)
function mainGame(size, board, background) {
    let player = startGame(size, background);
    let idInterval;
    // Ajouter un délai avant de commencer le jeu
    setTimeout(() => {
        idInterval = setInterval(() => {
            midGame(player, board, idInterval);
        }, 500);
    }, 1000); // Délai de 1 seconde avant de commencer le jeu
    setTimeout(() => {
        setInterval(() => {
            draw(player, board);
        }, 500);
    }, 1000);
}

export { mainGame };
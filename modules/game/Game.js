import { Player } from "../classes/snakeClasses/Player.js";
import { draw, drawBlankGrid } from "./DisplayGame.js";
import { updateScore } from '../../index.js'; 

function startGame(size, background) {
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
    sendScore(player.getScore());
}

function sendScore(score) {
    const path = 'php/game.php'
    fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}`
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
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
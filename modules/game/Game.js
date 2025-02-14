import { Player } from "../classes/snakeClasses/Player.js";
import { draw } from "./DisplayGame.js";
import { updateScore,looseGame } from './script.js'; 

function startGame(size) {
    let player = new Player(size);
    player.initialiseFruit();
    return player;
}



function sendScore(score) {
    const path = './../php/game.php'
    fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}`
    })
    .then(response => response.text())
    .catch(error => {
        console.error('Erreur:', error);
    });
}

function midGame(player, board, idInterval) {
    player.processInput(); 
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
function mainGame(size, board) {
    let player = startGame(size);
    let idInterval;
    // Ajouter un délai avant de commencer le jeu
    setTimeout(() => {
        idInterval = setInterval(() => {
            midGame(player, board, idInterval);
        }, 300);
    }, 1000); // Délai de 1 seconde avant de commencer le jeu
    setTimeout(() => {
        setInterval(() => {
            draw(player, board);
        }, 300);
    }, 1000);
}

export { mainGame,sendScore };
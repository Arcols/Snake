# Snake Game

Ce projet est une implémentation du jeu classique Snake en JavaScript. Le jeu utilise des éléments HTML5 Canvas pour le rendu graphique et est conçu pour être joué dans un navigateur web.

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)

## Installation

1. Clonez le dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/votre-utilisateur/snake.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd snake
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur préféré pour jouer au jeu.

## Utilisation

- Utilisez les touches fléchées pour déplacer le serpent.
- Mangez les fruits pour grandir et augmenter votre score.
- Évitez de heurter les murs ou de vous mordre la queue.

## Structure du projet

Voici un aperçu de la structure des fichiers du projet :
```
.gitattributes
index.css
index.html
index.js
LICENSE
modules/
    classes/
        canvasFunctions.js
        CanvasManager.js
        snakeClasses/
            Cell.js
            Grid.js
            Player.js
            Snake.js
    game/
        DisplayGame.js
        Game.js
pictures/
    brown/
    purple/
README.md
```

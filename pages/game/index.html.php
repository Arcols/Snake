<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <!-- Styles -->
    <link rel="stylesheet" href="./../../css/global.css">
    <link rel="stylesheet" href="./../../css/header.css">
    <link rel="stylesheet" href="./../../css/game.css">
</head>
<body>
    <header>
        <h1>Snake Game</h1>
        <nav>
            <a href="./">Game</a>
            <a href="./../php/deconnection.php">Se déconnecter</a>
            <a href="./profil/">Mon Profil</a>
        </nav>
    </header>
    <?php include './../../php/game.php'; ?>
    <main>
        <div>
            <div id="score"></div>
            <!-- <div id="level"></div> -->
            <!-- <div id="time"></div> -->
        </div>
        <div id="boardingame">
            <canvas id="board"></canvas>
        </div>
        <?php include './../../php/ranking.php'; ?>   
        <div id="ranking">
            <h1>LEADERBOARD</h1>
            <table>
            <tbody>
                <!-- Affichage des données de chaque joueur -->
                <?php $counter = 1; ?>
                <?php foreach ($games as $joueur): ?>
                    <?php if ($counter > 10) break; ?>
                    <tr>
                        <td><?= $counter ?></td>
                        <td><?= htmlspecialchars($joueur['login'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                        <td><?= htmlspecialchars($joueur['score'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                    </tr>
                    <?php $counter++; ?>
                <?php endforeach; ?>
            </tbody>
            </table>
        </div>
        <div id="gameover" class="divstartend">
            <h1>T'as perdu AHAHAH CHEH</h1>
            <button>Rejouer ????</button>
        </div>
        <div id="startgame" class="divstartend">
            <h1>Commencez à jouer ?</h1>
            <button>C'est parti !</button>
        </div>
    </main>
    <script type="module" src="./../../modules/game/script.js"></script>
</body>
</html>
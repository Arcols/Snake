<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <!-- Styles -->
    <link rel="stylesheet" href="./../css/global.css">
    <link rel="stylesheet" href="./../css/header.css">
    <link rel="stylesheet" href="./../css/game.css">
</head>
<body>
    <?php include './header.html'; ?>
    <?php include './../php/game.php'; ?>
    <main>
        <div>
            <div id="score"></div>
            <!-- <div id="level"></div> -->
            <!-- <div id="time"></div> -->
        </div>
        <div id="boardingame">
            <canvas id="board"></canvas>
        </div>
        <?php include './../php/ranking.php'; ?>   
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
        <div id="gameover">
            <h1>T'as perdu AHAHAH CHEH</h1>
            <button>Rejouer ????</button>
        </div>
    </main>
    <script type="module" src="./../index.js"></script>
</body>
</html>
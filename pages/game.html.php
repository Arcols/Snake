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
        <div id="ranking">
            <?php include './../php/ranking.php'; ?>    
            <table>
            <thead>
                <tr>
                    <th>Pseudo</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <!-- Affichage des données de chaque joueur -->
                <?php foreach ($games as $joueur): ?>
                    <tr>
                        <!-- Affichage des données du joueur dans chaque colonne -->
                        <td><?= htmlspecialchars($joueur['login'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                        <td><?= htmlspecialchars($joueur['score'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                        <td><?= htmlspecialchars($joueur['dateGame'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                    </tr>
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
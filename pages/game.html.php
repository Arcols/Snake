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
    <main class="content">
        <?php include './../php/game.php'; ?>
        <div id="score"></div>
        <div id="boardingame">
            <canvas id="board"></canvas>
        </div>
        <div id="gameover">
            <h1>T'as perdu AHAHAH CHEH</h1>
            <button>Rejouer ????</button>
        </div>
    </main>
    <script type="module" src="./../index.js"></script>
</body>
</html>
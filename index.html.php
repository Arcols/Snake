<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <!-- Styles -->
    <link rel="stylesheet" href="./css/game.css">
</head>
    <main>
    </main>
<body>
    <div class="header">
        <?php include './pages/header.html'; ?>
    </div>
    <?php include './php/game.php'; ?>
    <div id="score"></div>
    <canvas id="backgroundboard"></canvas>
    <canvas id="board"></canvas>
    <div id="gameover">
        <h1>T'as perdu AHAHAH CHEH</h1>
        <button>Rejouer ????</button>
    </div>
    <script type="module" src="index.js"></script>
</body>


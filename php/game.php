<?php
session_start();
if (!isset($_SESSION['login'])) {
    header("Location: connection.html.php");
    exit;
}

function addScore($login, $score) {
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=snakegame;charset=utf8mb4', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Générer un id de jeu unique
        $idgame = uniqid();

        // Insérer le score dans la table game
        $stmt = $pdo->prepare("INSERT INTO game (idgame, score) VALUES (:idgame, :score)");
        $stmt->execute([':idgame' => $idgame, ':score' => $score]);

        // Insérer la participation dans la table participer
        $stmt = $pdo->prepare("INSERT INTO participer (login, idgame, dateGame) VALUES (:login, :idgame, NOW())");
        $stmt->execute([':login' => $login, ':idgame' => $idgame]);

    } catch (PDOException $e) {
        die("<p>Erreur de connexion à la base de données : " . $e->getMessage() . "</p>");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['score'])) {
    $login = $_SESSION['login'];
    $score = $_POST['score'];
    addScore($login, $score);
}
?>
?>
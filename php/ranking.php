<?php
    session_start();
    if (!isset($_SESSION['login'])) {
        header("Location: connection.html.php");
        exit;
    }
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=snakegame;charset=utf8mb4', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Récupérer les joueurs et leurs statistiques de participation
        $stmt = $pdo->query("
            SELECT DISTINCT p.login, p.dateGame, g.score
            FROM participer p
            JOIN game g ON p.idgame = g.idgame
            JOIN (
                SELECT p.login, MAX(g.score) AS max_score
                FROM participer p
                JOIN game g ON p.idgame = g.idgame
                GROUP BY p.login
            ) AS max_scores ON p.login = max_scores.login AND g.score = max_scores.max_score
            WHERE g.score = max_scores.max_score
            ORDER BY g.score DESC, p.dateGame ASC
        ");
        $games = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("<p>Erreur de connexion à la base de données : " . $e->getMessage() . "</p>");
    }
?>
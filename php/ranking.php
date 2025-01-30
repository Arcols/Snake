<?php
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=snakegame;charset=utf8mb4', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Récupérer les joueurs et leurs statistiques de participation
        $stmt = $pdo->query("SELECT p.login, p.dateGame, g.score 
                         FROM participer p
                         JOIN game g ON p.idgame = g.idgame");
        $games = $stmt->fetchAll(PDO::FETCH_ASSOC);


    } catch (PDOException $e) {
        die("<p>Erreur de connexion à la base de données : " . $e->getMessage() . "</p>");
    }
?>
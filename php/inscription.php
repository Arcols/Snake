<?php
// filepath: /c:/wamp64/www/Snake/php/inscription.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=snakegame;charset=utf8mb4', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("<p>Erreur de connexion à la base de données : " . $e->getMessage() . "</p>");
    }

    // Récupérer les données du formulaire
    if (isset($_POST['login']) && isset($_POST['mdp'])) {
        $login = $_POST['login'];
        $mdp = $_POST['mdp'];

        // Supprimer les caractères invisibles du mot de passe
        $mdp = trim($mdp);

        $cle = "ohnoj'aiperdu";
        $mdp_hache = hash_hmac('sha256', $mdp, $cle);

        // Insérer l'utilisateur dans la base de données
        $stmt = $pdo->prepare("INSERT INTO utilisateur (login, mdp) VALUES (:login, :mdp)");
        $stmt->execute([':login' => $login, ':mdp' => $mdp_hache]);
        header("Location: ./../"); // Redirige vers la page principale
        echo "<p>Inscription réussie.</p>";
    } else {
        echo "<p>Veuillez remplir tous les champs.</p>";
    }
}
?>
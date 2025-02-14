<?php
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
        $cle = "ohnoj'aiperdu";
        $mdp_hache = hash_hmac('sha256', $mdp, $cle);

        // Vérifier l'utilisateur dans la base de données
        $stmt = $pdo->prepare("SELECT mdp FROM utilisateur WHERE login = :login");
        $stmt->execute([':login' => $login]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            if ($mdp_hache === $user['mdp']) {
                // Connexion réussie
                session_start();
                $_SESSION['login'] = $login; // Stocke le login dans la session
                header("Location: ./../pages/game/"); // Redirige vers la page principale
                echo "<p>Connexion réussie.</p>";
                exit;
            } else {
                echo "<p>Identifiant ou mot de passe incorrect.</p>";
            }
        } else {
            echo "<p>Identifiant ou mot de passe incorrect.</p>";
        }
    } else {
        echo "<p>Veuillez remplir tous les champs.</p>";
    }
}
?>
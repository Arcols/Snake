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

        // Supprimer les caractères invisibles du mot de passe
        $mdp = trim($mdp);

        $cle = "ohnoj'aiperdu";
        $mdp_hache = hash_hmac('sha256', $mdp, $cle);

        // Vérifier si le login existe déjà
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM utilisateur WHERE login = :login");
        $stmt->execute([':login' => $login]);
        $count = $stmt->fetchColumn();

        if ($count > 0) {
            // Rediriger vers la page principale avec un message d'erreur
            header("Location: ./../index.html.php?error=user_exists");
            exit();
        } else {
            // Insérer l'utilisateur dans la base de données
            $stmt = $pdo->prepare("INSERT INTO utilisateur (login, mdp) VALUES (:login, :mdp)");
            $stmt->execute([':login' => $login, ':mdp' => $mdp_hache]);
            // Rediriger vers la page principale avec un message de succès
            header("Location: ./../index.html.php?success=user_added");
            exit();
        }
    } else {
        echo "<p>Veuillez remplir tous les champs.</p>";
    }
}
?>
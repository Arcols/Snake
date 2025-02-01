<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>
<body>
    <form method="POST" action="">
        <div>
            <input type="text" name="login" placeholder="Identifiant" required><br>
        </div>
        <div>
            <input type="password" name="mdp" placeholder="Mot de passe" required><br>
        </div>
        <!-- REMEMBER ME COOKIE HANDLER -->
        <button type="submit">Se connecter</button>
        <p>Pas encore de compte ? <a href="./pages/inscription.html.php">Inscrivez-vous</a></p>
        <?php include './php/connection.php'; ?>
    </form>
</body>
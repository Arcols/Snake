<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
</head>
<body>
    
    <form method="POST" action="">
        <div>
            <input type="text" name="login" placeholder="Identifiant" required><br>
        </div>
        <div>
            <input type="password" name="mdp" placeholder="Mot de passe" required><br>
        </div>
        <button type="submit">S'inscrire</button>
        <p>Déjà un compte ? <a href="connection.html.php">Connecte toi !</a></p>
    </form>
    <?php include './../php/inscription.php'; ?>
</body>
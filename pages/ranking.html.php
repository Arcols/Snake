<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
</head>
<body>
    <?php include './../php/ranking.php'; ?>    
    <table>
        <thead>
            <tr>
                <th>Pseudo</th>
                <th>Score</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <!-- Affichage des données de chaque joueur -->
            <?php foreach ($games as $joueur): ?>
                <tr>
                    <!-- Affichage des données du joueur dans chaque colonne -->
                    <td><?= htmlspecialchars($game['login'], ENT_QUOTES, 'UTF-8') ?></td>
                    <td><?= htmlspecialchars($game['score'], ENT_QUOTES, 'UTF-8') ?></td>
                    <td><?= htmlspecialchars($game['dateGame'], ENT_QUOTES, 'UTF-8') ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
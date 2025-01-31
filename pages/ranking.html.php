<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
</head>
<body>
    <div class="header">
        <?php include './header.html'; ?>
    </div>
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
                    <td><?= htmlspecialchars($joueur['login'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                    <td><?= htmlspecialchars($joueur['score'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                    <td><?= htmlspecialchars($joueur['dateGame'] ?? '', ENT_QUOTES, 'UTF-8') ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
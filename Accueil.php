<?php
require('fonctions.php');
if($_SESSION['idUtilisateur'] == null) {
    page('connexion.php');
}
selectionnerPersonnages($_SESSION['idUtilisateur'], $db);
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/accueil.css" />
        <title>Accueil</title>
    </head>
    <body>
        <div class="container">
            <div class="split left">
                <h1>Sélection Personnage</h1>
                <a href="choix.php" class="btn">Sélectionner</a>
            </div>
            <div class="split right">
                <h1>Randomiser</h1>
                <a href="random.php" class="btn">Randomiser</a>
            </div>
        </div>
        <script src="script/accueil.js"></script>
    </body>
</html>
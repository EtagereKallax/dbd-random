<?php 
require('fonctions.php');
if($_SESSION['idUtilisateur'] == "") {
    page('connexion.php');
}
deleteCharacter($_SESSION['idUtilisateur'], $db);
?>
<!DOCTYPE html>
<html lang="fr">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/selection.css" />
    <script src="lib/js/jquery-3.3.1.min.js"></script>
    <script src="script/randomizer-data.js"></script>
    <script src="script/randomizer-ui-translator.js"></script>
    <title>Choix des personnages</title>
    <body>
        <h1 class="title">Choix des personnages</h1>
        <form method="POST">
            <h2 class="title">Survivants</h2>
            <div class="container" id="choix"></div>
            <hr>
            <h2 class="title">Tueurs</h2>
            <div class="container" id="choix1"></div>
            <div id="selectAll" onclick="selectAllImages()">Tout sélectionner</div>
            <input type="submit" name="submit" value="Enregistrer" class="btn" />
        </form>
        <script src="script/choix.js"></script>
        <?php
        if(isset($_POST['submit'])) {
            $_SESSION['survivants'] = $_POST['gotsurv'];
            foreach($_POST['gotsurv'] as $surv) {
                insert("characters(idUtilisateur, perso, role)", "(?,?,?)", array($_SESSION['idUtilisateur'], $surv, 1), $db);
            }

            $_SESSION['tueurs'] = $_POST['gottueur'];
            foreach($_POST['gottueur'] as $tueur) {
                insert("characters(idUtilisateur, perso, role)", "(?,?,?)", array($_SESSION['idUtilisateur'], $tueur, 2), $db);
            }

            page("random.php");
        }
        ?>
    </body>
</html>
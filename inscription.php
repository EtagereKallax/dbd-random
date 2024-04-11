<?php
require("fonctions.php");
session_destroy();
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/connexion.css" />
        <title>Page d'inscription</title>
    </head>
    <body>
        <div class="container">
            <h1>Inscription</h1>
            <form method="POST">
                <div class="form-control">
                    <input type="text" name="pseudo" required>
                    <label>Pseudo :</label>
                </div>

                <div class="form-control">
                    <input type="text" name="code" required>
                    <label>Code : #</label>
                </div>

                <input type="submit" value="S'inscrire" name="connexion" class="btn">

                <p class="text">Déjà inscrit ? <a href="connexion.php">Se connecter</a></p>
            </form>
        </div>
        <script src="script/connexion.js"></script>

        <?php
        if(isset($_POST['connexion'])) {
            $pseudo = htmlspecialchars($_POST['pseudo']);
            $code = $_POST['code'];
            sinscrire($pseudo, $code, $db);
        }
        ?>
    </body>
</html>
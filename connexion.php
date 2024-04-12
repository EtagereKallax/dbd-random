<?php
require("fonctions.php");
session_destroy();
session_start();
session_cache_expire(60);
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/connexion.css" />
        <title>Page de connexion</title>
    </head>
    <body>
        <div class="container">
            <h1>Connexion</h1>
            <form method="POST">
                <div class="form-control">
                    <input type="text" name="pseudo" required>
                    <label>Pseudo :</label>
                </div>

                <div class="form-control">
                    <input type="text" name="code" required>
                    <label>Code : #</label>
                </div>

                <input type="submit" value="Se connecter" name="connexion" class="btn">

                <p class="text">Première fois ? <a href="inscription.php">S'inscrire</a></p>
            </form>
        </div>
        <script src="script/connexion.js"></script>

        <?php
        if(isset($_POST['connexion'])) {
            $pseudo = htmlspecialchars($_POST['pseudo']);
            $code = $_POST['code'];
            checkConnection($pseudo, $code, $db);
        }
        ?>
    </body>
</html>
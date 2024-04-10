<?php require('connexionDB.php');
session_start();

function page($name) {
    echo "<script type='text/javascript'>document.location.replace('" . $name . "');</script>";
}

function checkConnection($pseudo, $code, $db): void {
    // Initialisation du message d'erreur
    $errorMessage = "";

    // Si le pseudo et le code sont renseignés
    if($pseudo != null && $code != null) {
        $selectUser = $db->prepare("SELECT * FROM utilisateur WHERE pseudo = ? AND friendcode = ?");
        $selectUser->execute(array($pseudo, $code));
        // Vérification de l'existence de l'utilisateur dans la base de données
        $userExist = $selectUser->rowCount();

        // Si l'utilisateur existe
        if($userExist == 1) {
            // Récupéraction des informations de l'utilisateur
            $userInfo = $selectUser->fetch();
            // Enregistrement des informations de l'utilisateur dans la session en cours
            $_SESSION['idUtilisateur'] = $userInfo['idUtilisateur'];
            $_SESSION['pseudo'] = $pseudo;
            $_SESSION['code'] = $code;

            // Redirection vers la page d'accueil du site
            page('Accueil.php');
        } else {
            // Si l'utilisateur n'existe pas, affichage d'un message d'erreur
            $errorMessage = "Veuillez vérifier votre pseudo ou votre code."
        }
    } else {
        // Si l'utilisateur ou le code est vvide, affichage d'un message d'erreur
        $errorMessage = "Veuillez vérifier votre pseudo ou votre code.";
    }
    // Affichage du message d'erreur
    echo $errorMessage;
}

function checkValidite($pseudo, $code, $db) {
    // Préparation de la requête SQL pour sélectionner tous les utilisateurs du pseudo et du code spécifié
    $selectUser = $db->prepare("SELECT * FROM utilisateur WHERE pseudo = ? AND friendcode = ?");
    // Exécution de la requête avec le pseudo et le code en paramètre
    $selectUser->execute(array($pseudo, $code));
    // Récupération du nombre de lignes retournées par la requête
    $userExist = $selectUser->rowCount();

    return $userExist == 0;
}

function insert($table, $nbValues, $values, $db) {
    $sql = $db->prepare("INSERT INTO " . $table . " VALUES " . $nbValues);

    $sql->execute($values);
}

function sinscrire($pseudo, $code, $db): void {
    $errorMessage = "";
    
    if($pseudo != null && $code != null) {
        if(checkValidite($pseudo, $code, $db)) {
            insert("utilisateur(pseudo, friendcode)", "(?,?)", array($pseudo, $code), $db);
            checkConnection($pseudo, $code, $db);
        } else {
            $errorMessage = "Cet utilisateur existe déjà. Veuillez vous connecter ou réessayer avec un autre identifiant.";
        }
    } else {
        $errorMessage = "Une erreur est survenue. N'oubliez pas de rentrer toutes les informations demandées.";
    }
    echo $errorMessage;
}

function checkExist($idUtilisateur, $db) {
    $selectUser = $db->prepare("SELECT * FROM characters WHERE idUtilisateur = ?");
    $selectUser->execute(array($idUtilisateur));
    $userExist = $selectUser->rowCount();

    return $userExist == 0;
}

function selectionnerPersonnages($idUtilisateur, $db) {
    $selectSurvivants = $db->prepare("SELECT perso FROM characters WHERE idUtilisateur = ? AND `role` = 1");
    $selectSurvivants->execute(array($idUtilisateur));
    $survivants = $selectSurvivants->fetchAll();
    $_SESSION['survivants'] = array();
    foreach($survivants as $survivant) {
        array_push($_SESSION['survivants'], $survivant['perso']);
    }

    $selectTueurs = $db->prepare("SELECT perso FROM characters WHERE idUtilisateur = ? AND `role` = 2");
    $selectTueurs->execute(array($idUtilisateur));
    $tueurs = $selectTueurs->fetchAll();
    $_SESSION['tueurs'] = array();
    foreach($tueurs as $tueur) {
        array_push($_SESSION['tueurs'], $tueur['perso']);
    }
}

function deleteCharacter($table, $condition, $values, $db) {
    $deleteCharacter = $db->prepare("DELETE FROM " . $table . " WHERE " . $condition);
    $deleteCharacter->execute($values);
}
?>
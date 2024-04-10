<?php
/**
 * Fichier qui peut être appelé dans d'autres fichiers dans le but de se connecter à la base de données
 * 
 * PHP version 8
 * 
 * @version 1.0
 * @author Thomas Sandra <thomassandradu0059@gmail.com>
 */
try {
    $db = new PDO('mysql:host=localhost;dbname=id19988489_deadbydaylight; charset=utf8', 'root', 'root');
} catch(Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
?>
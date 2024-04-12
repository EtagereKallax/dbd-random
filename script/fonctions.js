const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'id19988489_deadbydaylight',
    charset: 'utf8'
});

// Connexion à la base de données
connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données :', err.message);
        return;
    }
    console.log('Connexion à la base de données établie.');
});

module.exports = connection;
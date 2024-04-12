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

// Fonction pour vérifier la connexion de l'utilisateur
async function checkConnection(pseudo, code, connection) {
    let errorMessage = "";

    if(pseudo !== null && code !== null) {
        try {
            const [rows] = await connection.execute("SELECT * FROM utilisateur WHERE pseudo = ? AND friendcode = ?", [pseudo, code]);
            if(rows.length === 1) {
                sessionStorage.setItem('idUtilisateur', rows[0].idUtilisateur);
                page('Accueil.html');
            } else {
                errorMessage = "Veuillez vérifier votre pseudo ou votre code.";
            }
        } catch(error) {
            console.error("Erreur lors de la vérification de la connexion :", error);
            errorMessage = "Une erreur s'est produite lors de la vérification de la connexion.";
        }
    } else {
        errorMessage = "Veuillez vérifier votre pseudo ou votre code.";
    }
    console.log(errorMessage);
}

// Fonction pour vérifier la validité de l'utilisateur
async function checkValidite(pseudo, code, connection) {
    try {
        const [rows] = await connection.execute("SELECT * FROM utilisateur WHERE pseudo = ? and friendcode = ?", [pseudo, code]);
        return rows.length == 0;
    } catch(error) {
        console.error("Erreur lors de la vérification de la validité de l'utilisateur :", error);
        return false;
    }
}

// Fonction pour inscrire un nouvel utilisateur
async function sinscrire(pseudo, code, connection) {
    let errorMessage = "";

    if(pseudo !== null && code !== null) {
        try {
            if(await checkValidite(pseudo, code, connection)) {
                // Insérer un nouvel utilisateur dans la base de données
                await connection.execute("INSERT INTO utilisateur(pseudo, friendcode) VALUES (?, ?)", [pseudo, code]);
                // Vérifier la connexion du nouvel utilisateur
                await checkConnection(pseudo, code, connection);
            } else {
                errorMessage = "Cet utilisateur existe déjà. Veuillez vous connecter ou réessayer avec un autre identifiant.";
            }
        } catch(error) {
            console.error("Erreur lors de l'inscription de l'utilisateur :", error);
            errorMessage = "Une erreur s'est produite lors de l'inscription de l'utilisateur.";
        }
    } else {
        errorMessage = "Une erreur est survenue. N'oubliez pas de rentrer toutes les informations demandées.";
    }
    console.log(errorMessage);
}

async function selectionnerPersonnage(idUtilisateur, connection) {
    const [rows] = await connection.execute("SELECT perso FROM characters WHERE idUtilisateur = ? AND `role` = 1", [idUtilisateur]);
    let survivants = [];
    rows.forEach((row) => {
        survivants += [row.perso];
    });
    sessionStorage.setItem('survivants', survivants);

    const [rows1] = await connection.execute("SELECT perso FROM characters WHERE idUtilisateur = ? AND `role` = 2", [idUtilisateur]);
    let tueurs = [];
    rows1.forEach((row) => {
        tueurs += [row.perso];
    });
    sessionStorage.setItem('tueurs', tueurs);
}

async function deleteCharacter(idUtilisateur, connection) {
    await connection.execute("DELETE FROM characters WHERE idUtilisateur = ?", [idUtilisateur]);
}
const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost', // O la IP del servidor si no es localhost
    user: 'root', // Sustituye con tu nombre de usuario
    password: 'NakamaConstruccion', // Contraseña directa
    database: 'DB_Construcciones3', // Nombre de la base de datos
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
});

module.exports = { conection };

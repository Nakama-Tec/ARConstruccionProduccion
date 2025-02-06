// testDB.js
const mysql = require('mysql2');

// Crear la conexión con MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',               // Usuario de la base de datos
    password: 'NakamaConstruccion',  // Contraseña del usuario 
    database: 'DB_Construcciones3'  // Nombre de la base de datos
});

// Exportar la conexión para usarla en otros archivos
module.exports = {
    connection: connection
};


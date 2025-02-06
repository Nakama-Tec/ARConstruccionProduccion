const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'Nakamatec996@',
    database: process.env.DATABASE || 'DB_Construcciones3'
});

connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection; // Exporta la conexión


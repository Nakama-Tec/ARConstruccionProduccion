const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // O el usuario que creaste
    password: 'NakamaConstruccion', // O la contraseña del usuario
    database: 'DB_Construcciones3'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('✅ Conexión exitosa a la base de datos');

    // Prueba una consulta
    connection.query('SHOW TABLES', (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
        } else {
            console.log('Tablas en la base de datos:', results);
        }
        connection.end();
    });
});

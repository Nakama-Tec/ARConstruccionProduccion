require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

console.log('Variables de entorno:', {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error al conectar a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a MySQL en la VPS');
});



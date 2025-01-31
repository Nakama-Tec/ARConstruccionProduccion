const mysql = require('mysql2');
const dotenv = require('dotenv')

dotenv.config()

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306 //puerto mysql 

//     waitForConnections: true,
//     connectionLimit: 10,
//    queueLimit: 0
})

module.exports = {conection}

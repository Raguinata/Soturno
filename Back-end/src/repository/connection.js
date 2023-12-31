import mysql2 from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

const con = await mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
})

console.log("Banco conectado")

export { con }
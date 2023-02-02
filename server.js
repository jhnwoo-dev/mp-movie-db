const e = require("express");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    datbase: "movies_db",
});

const toDelete = 2;
db.query(`DELETE FROM movies WHERE id=?`, [toDelete], (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});

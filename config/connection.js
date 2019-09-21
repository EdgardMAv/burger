const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "burgersdb"
});

connection.connect((err) =>{
    if (err){
        console.error("erro connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
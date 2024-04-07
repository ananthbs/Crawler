const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CrawlDB'
});

mysqlConnection.connect((err) =>{
    if(err){
        console.log("Failed connecting DB", err);
    }
    else{
        console.log("DB connected successfully");
    }
});

module.exports = mysqlConnection;

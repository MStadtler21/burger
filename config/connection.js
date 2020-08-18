const util = require ("util");
const mysql = require ("mysql");
const connection = mysql.createConnection({
    host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", 
    user: "j1sp7lovcw4ay3vf", 
    port: 3306, 
    password: "db3x4fu8l42rmpk1", 
    database: "carlq82wmbo9t3h6"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
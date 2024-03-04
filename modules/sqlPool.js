
var mysql = require('mysql');
var sqlPool  = mysql.createPool({
    multipleStatements: true,
    connectionLimit : 100,
    host            : '127.0.0.1',
    user            : 'root',
    password        : '1234',
    database        : 'express_oauth2_demo'
});
module.exports = sqlPool;

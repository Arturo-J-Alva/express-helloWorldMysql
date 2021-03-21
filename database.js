const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host:'bul2dejugfjsa08futit-mysql.services.clever-cloud.com',
    user:'uhoa77liasarj0ou',
    password:'0u4IPIoyunU8KZZtApSz',
    database:'bul2dejugfjsa08futit'
});

mysqlConnection.connect(function (err) {
    if(err) { 
        console.log(err)
        return
     }else{
         console.log('Db is connected!')
     }
})

module.exports = mysqlConnection;
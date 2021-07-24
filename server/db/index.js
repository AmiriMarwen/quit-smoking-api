const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host     : 'sql11.freesqldatabase.com',
    user     : 'sql11427420',
    password : 'v6zZSpxZLj',
    database : 'sql11427420',
    debug    :  false
});

let users = {};

users.all = () => {
 return new Promise((resolve , reject)=>{
   pool.query(`SELECT * FROM tb `, (err,results)=> {
     if (err) {
       return reject(err)
     }
     return resolve(results)
   })
 })


}


module.exports = users;

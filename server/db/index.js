const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: 'sql11.freesqldatabase.com',
  user: 'sql11427420',
  password: 'v6zZSpxZLj',
  database: 'sql11427420',
  debug: false
});

let data = {};

// get all
data.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM tricks `, (err, results) => {
      if (err) {
        return reject(err)
      }
      console.log('Connected Successfully');
      return resolve(results)
    })
  })
}

// get one
data.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM tricks WHERE id = ?`, [id], (err, results) => {
      if (err) {
        return reject(err)
      }
      console.log('Connected Successfully');
      return resolve(results[0])
    })
  })
}

// add one
data.add = (tip) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO tricks SET ? `, tip, function(err, results) {
      if (err) {
        return reject(err)
      }
      console.log('New Advice Created Successfully');
      return resolve(results)
    });
  })
}

// update one
data.update = (tip, id) => {
  return new Promise((resolve, reject) => {
    pool.query("UPDATE tricks SET ? WHERE id = ?", [tip, id], function (err, results) {
		if(err) {
			return reject(err)
		}
    console.log('Updated Successfully');
    return resolve(results)
    });
  })
}

// delet one
data.del = (del_id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM tricks WHERE id = ?', [del_id], function (err, results) {
		if(err) {
			return reject(err)
		}
    console.log('Deleted Successfully');
    return resolve(results)
    });
  })
}



module.exports = data;

// const db = require('../db.js')
//
// module.exports = (req, res) => {
// 	db.query(`SELECT * FROM car_shop`, (err, result) => {
// 		if (err) {
// 			console.log('err', err);
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }


// Database
const db = require('../db')

module.exports = (req, res) => {
	db.query(`SELECT * FROM car_shop`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}

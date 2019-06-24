const db = require('../db')

module.exports = (req, res) => {
	if (req.params.id) {
		db.query(`
      SELECT
car_shop.id,
car_shop.brand,
car_shop.price,
car_shop.picture,
car_shop.model,
category.name AS "category"
FROM car_shop
LEFT JOIN category
ON car_shop.category = category.id
WHERE category = ${req.params.id}
      `, (err, result) => {
			if (err) {
				res.send(err)
			} else {
				res.send(result.rows)
			}
		})
	} else {
		res.send('Sorry, id is required')
	}
}

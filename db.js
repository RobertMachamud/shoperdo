// mongo db
// pg installed imported
const {Client} = require('pg')

// create connection to database
const db = new Client ({
	// car_shop sql table
	connectionString: 'postgres://robertmachamud:@localhost:5432/products'
})

//connection to database
db.connect((err) => {
	if (err) {
		console.log('error connecting to postgressSQL databse');
	} else {
		console.log('Connected');
	}
})

// exportong
module.exports = db

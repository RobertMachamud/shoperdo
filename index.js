// express and 'path' are installed just need require
const express = require('express')
const path = require('path')
// app runs express
const app = express()

const db = require('./db')

// make static   client - folder
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	// products.html web page
	res.sendFile(path.join(__dirname, '/client/products.html'))
	// testing purp.
	console.log('__dirname', __dirname)
})

app.get('/api/products', require('./controllers/products_get.js'))
app.get('/api/categories', require('./controllers/categories_get.js'))
app.get('/api/click/:id', require('./controllers/click_get.js'))




// listens to chrome 3000 (later ip adress)
app.listen(3000, () => {
	console.log('Server is listening on port 3000')
})

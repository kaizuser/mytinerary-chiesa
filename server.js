require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./config/database')
const Router = require('./routes/routes')
const PORT = 4000

const path = require('path')
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)

if(process.env.NODE_ENV == 'production'){
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname + '/client/build/index.html'))
	})
}


app.listen(process.env.PORT || PORT, process.env.HOST || '0.0.0.0', () => console.log(`Server setted in port ${process.env.PORT || PORT}`))

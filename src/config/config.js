const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/masterquest'

mongoose.connect(dbURI)

mongoose.connection.on('connected', function () {
	console.log('O banco de dados foi conectado.' + dbURI)
})
mongoose.connection.on('error', function (err) {
	console.log('Aconteceu um erro inesperado: ', err)
})
mongoose.connection.on('disconnected', function () {
	console.log('O banco de dados foi desconectado.')
})
mongoose.connection.on('open', function () {
	console.log('O banco de dados está aberto para uso.')
})
process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('O banco de dados foi encerrado.')
		process.exit(0)
	})
})
//4 => connected, err, disconnected, open, close, SIGINT
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const _schema = {
	name: String,
	description: String,
	type: String,
	skill: Schema.Types.Mixed, //ataques e força do ataque
	defense: Number,
	height: Number,
	dead: Boolean,
	created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new Schema(_schema)

//criando a coleção no banco de dados
const PokemonModel = mongoose.model('pokemon', PokemonSchema)

//adicionando pokemons.
const dados = {
	name: 'Squirtle',
	description: 'Dragão de fogo, Amigavel, porem não é docil. O fogo da sua calda não pode ser apagado se não ele irá morrer.',
	skill: {
		"Brasas": 1000,
		"Encarar": 500 
	},
	defense: 400,
	height: 40,
	dead: false
}

//inserindo no banco de dados e mostrando no terminal o resultado.
const query = { name: /tiroslesamon/i }
const opcao = { name: 1}

PokemonModel.find(query, opcao, function (err, data) {
	if (err) return console.log('Aconteceu algum erro', err)
	
	//inserindo //erro de logica.
	if (data == false) {
		const pokemon = new PokemonModel(dados)
		pokemon.save(function(err, dd) {
		if (err) return console.log('Deu erro: ', err)
			console.log(dd)
		})
	} else {
		return console.log('Já está inserido.')
	}
	

})

module.exports = PokemonSchema
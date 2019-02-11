let Sequelize = require('sequelize')
const { nodeEnv } = require('../lib/util')
const pgConfig = require('../config/pg')[nodeEnv]
let path = require('path')

const sequelize = new Sequelize(pgConfig)

const models = {
	Users: sequelize.import(path.join(__dirname, './users')),
	Contests: sequelize.import(path.join(__dirname, './contests')),
	Names: sequelize.import(path.join(__dirname, './names')),
	Votes: sequelize.import(path.join(__dirname, './votes')),
}

Object.keys(models).forEach(moduleName => {
	if('associate' in models[moduleName]) {
		models[moduleName].associate(models)
	}
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
let Sequelize = require('sequelize')
const { nodeEnv } = require('../lib/util')
const pgConfig = require('../config/pg')[nodeEnv]
let path = require('path')

const models = {
	User: sequelize.import(path.join(__dirname, './users')),
}

Object.keys(models).forEach(moduleName => {
	if('associate' in models[moduleName]) {
		models[moduleName].associate(models)
	}
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
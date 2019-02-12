require('dotenv').config()
const { graphql } = require('graphql')
const { nodeEnv } = require('./util')
const ncSchema = require('../schema')
const graphqlRoute = require('../routes')
const app = require('express')()
const database = require('../database')

console.log(`Running in ${nodeEnv} mode ...`)

app.use('/', graphqlRoute)

const PORT = process.env.PORT || '2000'
app.listen(PORT, async () => {
	console.log('Server is running at port ', PORT)
	try{
		await database.sequelize.sync()
		console.log('Database synced')
	}catch(e){
		console.log('DB Sync error: ',e)
	}
})

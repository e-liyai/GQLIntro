const graphqlHTTP = require('express-graphql')
const ncSchema = require('../schema')
const { Pool } = require('pg')
const { nodeEnv } = require('../lib/util')
const pgConfig = require('../config/pg')[nodeEnv]
const pgPool = new Pool(pgConfig)

const graphqlRoute = graphqlHTTP({
	schema: ncSchema,
	graphiql: true,
	context: { pgPool }
})

module.exports = graphqlRoute
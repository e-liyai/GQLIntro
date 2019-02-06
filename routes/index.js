const graphqlHTTP = require('express-graphql')
const ncSchema = require('../schema')
const pg = require('pg')
const pgConfig = require('../config/pg')[nodeEnv]
const pgPool = new pg.Pool(pgConfig)

const graphqlRoute = graphqlHTTP({
	schema: ncSchema,
	graphiql: true,
	context: { pgPool }
})

module.exports = graphqlRoute
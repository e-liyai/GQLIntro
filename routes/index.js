const graphqlHTTP = require('express-graphql')
const ncSchema = require('../schema')
const database = require('../database')

const graphqlRoute = graphqlHTTP({
	schema: ncSchema,
	graphiql: true,
	context: { database }
})

module.exports = graphqlRoute
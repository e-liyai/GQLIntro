const graphqlHTTP = require('express-graphql')
const ncSchema = require('../schema')

const graphqlRoute = graphqlHTTP({
	schema: ncSchema,
	graphiql: true,
	context: { pgPool }
})

module.exports = graphqlRoute
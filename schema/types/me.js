const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLNonNull,
} = require('graphql')

module.exports = new GraphQLObjectType({
	name: 'MeType',
	fields: {
		id: { type: GraphQLID },
		fullName: { type: GraphQLString },
		email: { type: new GraphQLNonNull(GraphQLString) }
	}
})
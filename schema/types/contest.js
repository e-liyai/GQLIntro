const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLID,
} = require('graphql')
const ContestStateType = require('./contest_states')

module.exports = new GraphQLObjectType({
	name: 'ContestType',
	fields: {
		id: { type: GraphQLID },
		code: { type: GraphQLNonNull(GraphQLString) },
		title: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLString },
		states: { type: GraphQLNonNull(ContestStateType) },
		createdAt: { type: GraphQLNonNull(GraphQLString) },
	}
})
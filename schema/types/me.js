const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql')
const ContestType = require('./contests')

module.exports = new GraphQLObjectType({
	name: 'MeType',
	fields: {
		id: { type: GraphQLID },
		fullName: { type: GraphQLString },
		email: { type: new GraphQLNonNull(GraphQLString) },
		contests: {
			type: new GraphQLList(ContestType),
			resolve() {
				
			}
		}
	}
})
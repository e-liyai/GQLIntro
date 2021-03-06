const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
} = require('graphql')
const MeType = require('./types/me')
const { getUserByAPIKey } = require('../queries')

const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		me: {
			type: MeType,
			description: 'The current user identified by an api key',
			args: {
				key: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve: async (obj, args, ctx) => {
				// read user info from database
				return await getUserByAPIKey(ctx.database, args.key)
			}
		}
	}
})

const ncSchema = new GraphQLSchema({
	query: RootQueryType
})

module.exports = ncSchema
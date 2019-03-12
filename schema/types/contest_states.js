const {
	GraphQLEnumType,
} = require('graphql')

module.exports = new GraphQLEnumType({
	name: 'ContestStateType',
	values: {
		DRAFT: { value: 'draft' },
		PUBLISHED: { value: 'published' },
		ARCHIVED: { value: 'archived' },
	}
})
const { graphql } = require('graphql')
const { nodeEnv } = require('./util')
const ncSchema = require('../schema')
const graphqlRoute = require('../routes')
const app = require('express')()

console.log(`Running in ${nodeEnv} mode ...`)

app.use('/', graphqlRoute)

const PORT = process.env.PORT || '2000'
app.listen(PORT, () => {
	console.log('Server is running at port ', PORT)
})

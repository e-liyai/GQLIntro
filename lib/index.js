const { graphql } = require('graphql')
const { nodeEnv } = require('./util')
const ncSchema = require('../schema')

console.log(`Running in ${nodeEnv} mode ...`)

// read query from CL
const query = process.argv[2]

// validate and run against schema
graphql(ncSchema, query).then(result => console.log(result))

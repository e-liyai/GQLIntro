const { MongoClient } = require('mongodb')
const assert = require('assert')
const { nodeEnv } = require('../lib/util')
const config = require('../config/mongo')[nodeEnv]

MongoClient.connect(config.url, (err, mPool) => {
	
})
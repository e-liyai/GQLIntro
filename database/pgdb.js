module.exports = async (pgPool, apiKey)=> {
	// await pgPool.connect()
	// const user = client.query(`SELECT * FROM users WHERE api_key = $1`, [apiKey])
	// console.log('=============== ', user)
	// client.release()
	// return user.row[0]

	pgPool.connect((err, client, release) => {
	  if (err) {
	    return console.error('Error acquiring client', err.stack)
	  }
	  client.query('SELECT NOW()', (err, result) => {
	    release()
	    if (err) {
	      return console.error('Error executing query', err.stack)
	    }
	    console.log(result.rows)
	  })
	})
}
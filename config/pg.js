module.exports = {
	development: {
		host: process.env.HOST,
		port: process.env.DB_PORT,
  		username: process.env.DB_USER,
		database: process.env.DATABASE,
		dialect: process.env.DIALECT,
	}
}
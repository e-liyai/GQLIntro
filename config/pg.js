module.exports = {
	development: {
		database: process.env.DATABASE,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		dialect: process.env.DIALECT,
		port: process.env.DB_PORT
	}
}
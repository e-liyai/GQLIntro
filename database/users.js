module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},

		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		age: {
			type: DataTypes.INTEGER,
			defaultValue: 18
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		apiKey: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		createdAt: {
			type: 'TIMESTAMP',
	        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		}
	}, {
		getterMethods: {
			fullName: function() {
				return this.firstName+ ' ' +this.lastName 
			}
		}
	})

	Users.associate = (models) => {
		Users.hasMany(models.Contests)
		Users.hasMany(models.Names)
		Users.hasOne(models.Votes)
	}

	return Users
}
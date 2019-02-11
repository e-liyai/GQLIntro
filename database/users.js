module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
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
	        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		}
	}, {
		getterMethods: {
			fullName: function() {
				return this.firstName+ ' ' +this.lastName 
			}
		}
	})

	return User
}
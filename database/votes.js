module.exports = (sequelize, DataTypes) => {
	const Votes = sequelize.define('Votes', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		up: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		createdAt: {
			type: 'TIMESTAMP',
	        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		},
		createdBy: {
              type: DataTypes.INTEGER,
              references: 'Users',
              referencesKey: 'id'
        },
		nameId: {
			type: DataTypes.INTEGER,
		    references: {
		        model: 'Users',
		        key: 'id'
		    }
        }
	})

	Votes.associate = (models) => {
		Votes.hasOne(models.Users)
		Votes.hasOne(models.Names)
	}

	return Votes
}
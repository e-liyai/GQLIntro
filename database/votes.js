module.exports = (sequelize, DataTypes) => {
	const Votes = sequelize.define('Votes', {
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
              references: 'Users',
              referencesKey: 'id'
        }
	})

	Votes.associate = (models) => {
		Votes.belongsTo(models.Users, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			}
		})
	}

	return Votes
}
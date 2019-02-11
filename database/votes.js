module.exports = (sequelize, DataTypes) => {
	const Votes = sequelize.define('Votes', {
		up: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		createdAt: {
			type: 'TIMESTAMP',
	        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		},
		createdBy: {
              type: Sequelize.INTEGER,
              references: 'Users',
              referencesKey: 'id'
        },
		nameId: {
              type: Sequelize.INTEGER,
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
module.exports = (sequelize, DataTypes) => {
	const Names = sequelize.define('Names', {
		label: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		normalizedLabel: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		states: {
			type:   Sequelize.ENUM,
		    values: ['draft', 'published', 'archived'],
		    defaultValue: 'draft'
		},
		createdAt: {
			type: 'TIMESTAMP',
	        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		},
		updatedBy: {
              type: Sequelize.INTEGER,
              references: 'Users',
              referencesKey: 'id'
        },
		contestId: {
              type: Sequelize.INTEGER,
              references: 'Contests',
              referencesKey: 'id'
        }
	})

	Names.associate = (models) => {
		Names.belongsTo(models.Contests, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			}
		})
	}

	return Names
}
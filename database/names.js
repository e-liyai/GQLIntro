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
			type:   DataTypes.ENUM,
		    values: ['draft', 'published', 'archived'],
		    defaultValue: 'draft'
		},
		createdAt: {
			type: 'TIMESTAMP',
	        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		},
		updatedBy: {
              type: DataTypes.INTEGER,
              references: 'Users',
              referencesKey: 'id'
        },
		contestId: {
              type: DataTypes.INTEGER,
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
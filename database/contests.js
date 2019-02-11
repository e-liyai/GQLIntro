module.exports = (sequelize, DataTypes) => {
	const Contests = sequelize.define('Contests', {
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
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
        }
	})

	Contests.associate = (models) => {
		Contests.belongsTo(models.Users, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			}
		})
	}

	return Contests
}
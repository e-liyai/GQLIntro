module.exports = (sequelize, DataTypes) => {
	const Names = sequelize.define('Names', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
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
			references: {
		        model: 'Users',
		        key: 'id'
		    }
        },
		contestId: {
			type: DataTypes.INTEGER,
			references: {
		        model: 'Contests',
		        key: 'id'
		    }
        }
	})

	Names.associate = (models) => {
		Names.belongsTo(models.Contests, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			}
		})

		Names.belongsTo(models.Users, {
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false,
			}
		})
		Names.hasOne(models.Votes)
	}

	return Names
}
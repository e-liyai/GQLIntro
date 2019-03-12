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
		updatedAt: {
			type: 'TIMESTAMP',
	        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
	        allowNull: false
		},
		createdBy: {
            type: DataTypes.INTEGER,
            references: {
		        model: 'Users',
		        key: 'id'
		    }
        },
		nameId: {
			type: DataTypes.INTEGER,
		    references: {
		        model: 'Names',
		        key: 'id'
		    }
        }
	}, {
	    indexes: [{
	            unique: true,
	            fields: ['createdBy', 'nameId']
	    }]
	})

	Votes.associate = (models) => {
		Votes.belongsTo(models.Users)
		Votes.belongsTo(models.Names)
	}

	return Votes
}
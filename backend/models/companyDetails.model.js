module.exports = function(sequelize, DataTypes) {
    var company = sequelize.define('companyDetails', {
        companyId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyVertical: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return company;
  }
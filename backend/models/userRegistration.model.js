module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('userRegistration', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        }, type: {
            type: DataTypes.STRING,
            allowNull: true
        }, registeredTime: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return user;
  }
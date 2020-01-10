module.exports = function(sequelize, DataTypes) {
    var skill = sequelize.define('userDetails', {
        sno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        graduation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gradDate: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,
        college: {
            type: DataTypes.STRING,
            allowNull: true
        },
        university: {
            type: DataTypes.STRING,
            allowNull: true
        },
        visaType: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });
  
    return skill;
  }
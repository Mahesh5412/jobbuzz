module.exports = function(sequelize, DataTypes) {
    var skill = sequelize.define('skillTable', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        skillId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skillDomain: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skill: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return skill;
  }
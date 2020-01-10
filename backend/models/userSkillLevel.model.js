module.exports = function(sequelize, DataTypes) {
    var skill = sequelize.define('userSkillLevel', {
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
        skillId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skillLevel: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return skill;
  }
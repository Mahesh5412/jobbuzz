module.exports = function(sequelize, DataTypes) {
    var skill = sequelize.define('userJobApplication', {
        applicationId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jobId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jobStatus: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return skill;
  }
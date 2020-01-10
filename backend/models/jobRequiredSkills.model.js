module.exports = function(sequelize, DataTypes) {
    var job = sequelize.define('jobRequiredSkills', {
        sno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        jobId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skillId: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return job;
  }
module.exports = function(sequelize, DataTypes) {
    var company = sequelize.define('interestedLocations', {
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
        locationType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        locatiion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });
  
    return company;
  }
module.exports = function(sequelize, DataTypes) {
    var job = sequelize.define('jobDetails', {
        jobId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        jobProfile: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        experienceYearsReq: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vacancies: {
            type: DataTypes.STRING,
            allowNull: true
        },
        annualSalaryLakhs: {
            type: DataTypes.STRING,
            allowNull: true
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postedOn: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, {
        freezeTableName: true
    });
  
    return job;
  }
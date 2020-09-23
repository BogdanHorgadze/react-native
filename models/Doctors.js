const Sequelize = require('sequelize')
const sequelize = require('../utils/database')


const doctors = sequelize.define('Doctors',{
    id:{
        primaryKey : true,
        autoIncrement:true,
        allowNull:false,
        type: Sequelize.INTEGER
    },
    rate:{
        allowNull:false,
        type: Sequelize.INTEGER
    },
    distance:{
        allowNull:false,
        type: Sequelize.STRING
    },
    name:{
        allowNull:false,
        type: Sequelize.STRING
    },
    profession:{
        allowNull:false,
        type: Sequelize.STRING
    },
    location:{
        allowNull:false,
        type: Sequelize.STRING
    }
})

module.exports = doctors
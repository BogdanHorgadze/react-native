const Sequelize = require('sequelize')

const DB_NAME = 'db'
const USER_NAME = 'postgres'
const PASSWORD = '12345'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD,{
    host: 'localhost',
    dialect:'postgres'
})


module.exports = sequelize
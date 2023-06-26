const Sequilize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequilize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize
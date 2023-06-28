
const Sequilize = require('sequelize') 
const sequelize = require('../util/dataBase')

const Group = sequelize.define('chatgroup',{
    id:{
        type:Sequilize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:Sequilize.STRING,
        allowNull:false
    },
    
})

module.exports = Group
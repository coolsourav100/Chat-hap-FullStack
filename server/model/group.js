
const Sequilize = require('sequelize') 
const sequelize = require('../util/dataBase')

const Group = sequelize.define('group',{
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
    createBy:{
        type:Sequilize.STRING,
        allowNull:false
    }
})

module.exports = Group
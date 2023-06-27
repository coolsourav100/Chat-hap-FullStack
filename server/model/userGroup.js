
const Sequilize = require('sequelize') 
const sequelize = require('../util/dataBase')

const UserGroup = sequelize.define('group',{
    id:{
        type:Sequilize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type:Sequilize.INTEGER,
        allowNull:false
    },
    groupId:{
        type:Sequilize.INTEGER,
        allowNull:false
    }
})

module.exports = UserGroup
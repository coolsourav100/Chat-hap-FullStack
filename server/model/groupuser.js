const Sequilize = require('sequelize') 
const sequelize = require('../util/dataBase')

const GroupUser = sequelize.define('groupuser',{
    id:{
        type:Sequilize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type:Sequilize.STRING,
        allowNull:false
    },
    groupId:{
        type:Sequilize.STRING,
        allowNull:false
    },
    
})

module.exports = GroupUser
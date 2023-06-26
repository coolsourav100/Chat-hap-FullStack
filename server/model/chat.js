const Sequilize = require('sequelize');
const sequelize = require('../util/dataBase')

const Chat = sequelize.define('chat',{
    id:{
        type:Sequilize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    message:{
        type:Sequilize.STRING,
        allowNull:false
    }
})

module.exports = Chat
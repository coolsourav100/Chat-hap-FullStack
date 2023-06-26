const Sequilize = require('sequelize');
const sequelize = require('../util/dataBase')

const User = sequelize.define('user',{
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
    email:{
        type:Sequilize.STRING,
        unique: true
    },
    password:{
        type:Sequilize.STRING,
        unique: true
    }
})

module.exports = User
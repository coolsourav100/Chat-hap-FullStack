const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/dataBase')
const userRouter = require('./routes/user')
const chatRouter = require('./routes/Chat')
const groupRouter = require('./routes/group')
const cors = require('cors');
const User = require('./model/user');
const Chat = require('./model/chat');
const Group = require('./model/group');
const GroupUser = require('./model/groupuser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))

User.hasMany(Chat);
Group.hasMany(Chat)
Chat.belongsTo(Group ,{constraints: true, onDelete: 'CASCADE'})
Chat.belongsTo(User  ,{constraints: true, onDelete: 'CASCADE'})
User.belongsToMany(Group,{ through: GroupUser})
Group.belongsToMany(User,{through: GroupUser})

app.use('/auth',userRouter)
app.use('/chat',chatRouter)
app.use('/group' , groupRouter)


sequelize.sync()
const port = 4000
app.listen(port,()=>{
    console.log('server running on' , port)
})

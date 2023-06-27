const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/dataBase')
const userRouter = require('./routes/user')
const chatRouter = require('./routes/Chat')
const groupRouter = require('./routes/group')
const cors = require('cors');
const User = require('./model/user');
const Chat = require('./model/chat');
const UserGroup = require('./model/userGroup');
const Group = require('./model/group');
const app = express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))

User.hasMany(Chat);
Chat.belongsTo(User)
User.hasMany(UserGroup)
Group.hasMany(UserGroup)

app.use('/auth',userRouter)
app.use('/chat',chatRouter)
app.use('/group' , groupRouter)


sequelize.sync()
const port = 4000
app.listen(port,()=>{
    console.log('server running on' , port)
})

const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/dataBase')
const userRouter = require('./routes/user')
const chatRouter = require('./routes/Chat')
const cors = require('cors');
const User = require('./model/user');
const Chat = require('./model/chat');
const app = express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))

User.hasMany(Chat);
Chat.belongsTo(User)

app.use('/auth',userRouter)
app.use('/chat',chatRouter)


sequelize.sync()
const port = 4000
app.listen(port,()=>{
    console.log('server running on' , port)
})

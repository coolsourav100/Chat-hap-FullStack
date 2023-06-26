const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/dataBase')
const userRouter = require('./routes/user')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
// app.use('/',(req,res)=>{
//     res.send('hello from server')
// })
app.use('/auth',userRouter)


sequelize.sync()
const port = 4000
app.listen(port,()=>{
    console.log('server running on' , port)
})

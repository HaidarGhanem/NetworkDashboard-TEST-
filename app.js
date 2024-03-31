
//to require the data from env cause its secret
const dotenv = require('dotenv')


dotenv.config()

//importing
const express = require ('express')

//initialization
const app = express()

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 

//session

//routes
app.use('/dashboard' , require('./routes/board'))
app.use('/dashboard/hardware' , require('./routes/hardware'))
app.use('/dashboard/troubleshooting' , require('./routes/troubleshooting.js'))
app.use('/dashboard/security' , require('./routes/security'))
app.use('/dashboard/protocols' , require('./routes/protocols'))

app.listen(process.env.PORT, ()=>{console.log(`server is running`)})
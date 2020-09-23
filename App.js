const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000
const sequelize = require('./utils/database')

app.use(cors())
app.use('/api/doctors', require('./routes/doctors.route'))

async function start (){
    try{
        await sequelize.sync()
        app.listen(PORT,()=>{
            console.log(`server running ${PORT}`)
        })
    }catch(e){
        console.log(e)
    }
}
start()

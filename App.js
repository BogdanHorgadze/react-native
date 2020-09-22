const express = require('express')
const app = express()

const PORT = 5000

app.use('/api/doctors', require('./routes/doctors.route'))

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
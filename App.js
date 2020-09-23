const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())
app.use('/api/doctors', require('./routes/doctors.route'))

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})
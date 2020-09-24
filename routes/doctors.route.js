const {Router} = require('express')
const doctors = require('../models/Doctors')
const router = Router()
const Doctors = require('../models/Doctors')


router.get('/', async(req,res)=>{
    try{
        const data = await Doctors.findAll()
        res.json(data)
    }catch(e){
        console.log(e)
        res.json({message:'error'})
    }
})

router.post('/', async(req,res)=>{
    try{
        const {name , prof , rate} = req.body
        const data = await doctors.create({
           name,
           profession:prof,
           rate,
           location:'Dishant Hospital, Ring Road , Nagpur',
           distance:'0.7km' 
        })
        res.json(data)
    }catch(e){
        console.log(e)
        res.json({message:'error'})
    }
})

module.exports = router
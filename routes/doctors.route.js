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
        const data = await Doctors.create({
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

router.delete('/:id',async(req,res)=> {
    try{
        const data = await Doctors.findAll({
            where : {
                id: +req.params.id
            }
        })
        await data[0].destroy()
        const info = await doctors.findAll()
        res.json(info)
    }catch(e){
        console.log(e)
    }
})

module.exports = router
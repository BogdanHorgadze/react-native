const {Router} = require('express')
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


module.exports = router
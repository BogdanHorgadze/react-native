const {Router} = require('express')
const router = Router()
const Doctors = require('../models/Doctors')


router.get('/', async(req,res)=>{
    try{
        const data = await Doctors.find()
        res.json(data)
    }catch(e){
        console.log(e)
        res.json({message:'error'})
    }
})


module.exports = router
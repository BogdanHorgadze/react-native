const fs = require('fs')
const path = require('path')

class Doctors {
    constructor(){

    }

    static find (){
        return new Promise((resolve,reject)=> {
            fs.readFile(
                path.join(__dirname,'..','db','db.json'),
                'utf-8',
                (err,content)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Doctors
//import express from 'express'
var express=require('express')
const router= express.Router()


const votes={
}


router.get('/votes', function (req,res) {
    console.log('en /votes')
    res.json(votes)
})

//post /vote/123
router.post('/vote/:id', function (req,res) {
    var id=req.params.id

    if(votes[id]===undefined){
        votes[id]=1
    }else{
        votes[id]=votes[id]+1
    }
    res.json({votes:votes[id]})
})





module.exports=router
//export default router
//import express from 'express'
var express=require('express')
const router= express.Router()
var Vote =require('src/server/models')


const votes={
}


router.get('/votes', function (req,res) {
    console.log('en /votes')
    //esto es de mongoose parecido a mongodb
    Vote.find({}, function (err,docs) {
        if(err){
            return res.sendStatus(500).json(err)
        }
        res.json(docs)
    })

})

//post api/vote/123
router.post('/vote/:id', function (req,res) {


    var onSave=function (vote) {
        return function (err) {
            if(err){
                return res.sendStatus(500).json(err)
            }
            res.json(vote)
        }

    }
    var id=req.params.id

    Vote.findOne({ showId: 1}, function (err,doc) {
        if(doc){
            //actuaizo este doc
            doc.count=doc.count+1
            doc.save(onSave(doc))
        }else{
            //creo doc nuevo y le pongo count 1
            var vote=new Vote()
            vote.showId=id
            vote.count=1
            vote.save(onSave(vote))
        }

    })





})





module.exports=router
//export default router
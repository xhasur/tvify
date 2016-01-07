var express=require('express')
//import express from  'express'
const app =express()


const votes={
}





//sirve para ejecutar middelwares
//cada que haya un request este resuelve si esta pidiendo un archivo estatico y va y lo busca segun la url
//y va enviar el response y no procesa el resto de los end points
app.use(express.static('public'))


app.get('/votes', function (req,res) {
       res.json(votes)
})

//post /vote/123
app.post('/vote/:id', function (req,res) {
    var id=req.params.id
    if(votes[id]===undefined){
        votes[id]=1
    }else{
        votes[id]=votes[id]+1
    }
    res.json({votes:votes[id]})
})


app.listen(3000, function () {
 console.log("server iniciado con express en el  puerto 3000")
})
var express=require('express')
//import express from  'express'
const app =express()

//import api from  'src/server/api'
var api =require('src/server/api')



var mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/tvify')

//sirve para ejecutar middelwares
//cada que haya un request este resuelve si esta pidiendo un archivo estatico y va y lo busca segun la url
//y va enviar el response y no procesa el resto de los end points


//middleware en medio de el request que recibe express y la funcion que temrino devolviendo inormacion devuelta al cliente
//forma de reutilizar funciones o rutinas entre distintos endpont

app.use(express.static('public'))


//middelware se le pasa una url y un callback
app.use('/api/votes',function (req,res,next){
  console.log('middleware 1')
    next();
})
//ccada vez que expres ejecuta algun callback llame un objeto del response siempre espera un next
app.use('/api/votes',function (req,res,next){
    console.log('middleware 2')
    next();
})

app.use('/api',api)

app.listen(3000, function () {
 console.log("server iniciado con express en el  puerto 3000")
})
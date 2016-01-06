var express=require('express')
var app =express()

//sirve para ejecutar middelwares
//cada que haya un request este resuelve si esta pidiendo un archivo estatico y va y lo busca segun la url
//y va enviar el response y no procesa el resto de los end points
app.use(express.static('public'))


app.get('/votes', function (req,res) {
       res.json([])
})

app.post('/votes/:id', function (req,res) {

})


app.listen(3000, function () {
 console.log("server iniciado con express en el  puerto 3000")
})
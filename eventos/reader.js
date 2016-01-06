
//publisher
var fs= require('fs')
var EventEmitter= require('events')
var util= require('util')
var inherits=util.inherits


function readFileText(name,callback){
    //setTimeout(fn,0) otra forma de volverla asincrona

    process.nextTick(function () {
        var content=fs.readFileSync(name)
        callback(content.toString())
    })
}

/**
 readFileText('./public/index.html', function (content) {
    console.log(content)
})
 **/

//herencia en sm5
//eventos
//PATRON publisher and suscriber



function TextReader(name){
    EventEmitter.call(this)   //llamar al constructor de EventEmitter y la paso la clase para que se incilaize
    this.name=name
}

//copiar las propiedades a textReader las propiedades de EventEmitter una de ellas es emit
inherits(TextReader,EventEmitter)

TextReader.prototype.read= function () {
    var self= this
    readFileText(this.name, function (content) {
        self.emit('end',content)
    })
}

var reader = new TextReader('./public/index.html')


module.exports=reader
import fs from  'fs'
import EventEmitter from  'events'

//se deja por fuera como metodo privado(funcon privada) porque en es6 no existen metodos privadoss
function readFileText(name,callback){
    process.nextTick(function () {
        var content=fs.readFileSync(name)
        callback(content.toString())
    })
}

class TextReader extends EventEmitter {
    constructor(name) {
    super()
        this.name=name
    }

   read(){
       //la funcion flecha conserva el scope de la varibale this
       readFileText(this.name, (content) => {
       this.emit('end',content)
        })
   }

}

var reader =  new TextReader('./public/index.html')
export default reader
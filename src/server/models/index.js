var mongoose =require('mongoose')

var VoteSchema= new mongoose.Schema({
    showId:{type: Number,required: true, unique: true},
    count:{type: Number,default: 0}
})

//se registra la varibale
//export default mongoose.model('Vote',VoteSchema)
module.exports=mongoose.model('Vote',VoteSchema)


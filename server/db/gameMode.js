import mongoose from 'mongoose';
const gameSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
  
    createdAt:{
       type:Date,
       default:new Date()
    }
})

const Game = mongoose.model('game',gameSchema);
export default Game;
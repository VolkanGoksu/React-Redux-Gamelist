import express from 'express';
import mongoose from 'mongoose';

import Game from '../db/gameMode.js';

const router = express.Router();

//GET ALL GAMES
router.get('/', async (req,res)=>{
    try {
        const games = await Game.find();

        res.status(200).json(games)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

//GET SİNLGE GAME
router.get('/:id',async(req,res)=>{
    try {
        const { id } = req.params // id: xxxx

       //çektiğin id mongoose id konrol
        if(!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({message:'No games'})

        const game = await Game.findById(id);
        
        if(!game) return
        
        res.status(200).json(game);
    } catch (error) {
        res.status(404).json({message:'Game  not found'});

    }
})

//CREATE GAME

router.post('/',async(req,res)=>{
    try {
         const game = req.body;

         const createdGame = await Game.create(game);

         res.status(201).json(createdGame);
    } catch (error) {
        res.json({message:'Create Game Faild'})
    }

})

//UPDATE GAME
router.put('/:id',async(req,res)=>{
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id))
         
         res.status(404).json({messaage:'Game not found'})

         const{title,content,creator,image} = req.body;

         const updatedGame = await Game.findByIdAndUpdate(id,{title,content,creator,image, _id:id},{new:true});
        
         res.status(200).json(updatedGame);

    } catch (error) {
        res.json({message:'Create Game Faild'})
    }
})

//DELETE GAME
router.delete('/:id',async (req,res)=>{
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id))
         
        res.status(404).json({messaage:'Game not found'})

        await Game.findByIdAndDelete(id)
        res.status(200).json({messaage:'Game has been deleted'})
    } catch (error) {
        console.log(error.message);
    }
})
export default router;
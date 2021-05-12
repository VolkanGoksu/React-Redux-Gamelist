import React from 'react';
import moment from 'moment';

import{ Card } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import {MdDelete, MdModeEdit} from 'react-icons/md';

import {deleteGame,updateGame} from '../axios/index.js';
 

const Game = ({game})=>{
    return (
       <Card className = 'rounded py-3 my-3'>
           <Card.Img variant="top" src={game.image}></Card.Img>
           <Card.Body>
               <Card.Title style={{color:'red'}}>{game.title}</Card.Title>
           </Card.Body>
           <Card.Subtitle>{moment(game.createdAt).fromNow()}</Card.Subtitle>
          <Card.Footer style={{display:'flex', justifyContent:'space-between'}} className='bg-white pb-0'>
              <LinkContainer to ={`/update/${game._id}`} style={{cursor:'pointer'}}>
                  <MdModeEdit color = 'blue' size={20} />
              </LinkContainer>
              <MdDelete color = 'red' style={{cursor:'pointer'}}size = {20} onClick={()=>deleteGame(game._id)}/>
          </Card.Footer>
       </Card>
    )
}


export default Game
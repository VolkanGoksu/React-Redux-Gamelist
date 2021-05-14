import React,{useState,useEffect} from 'react';

import moment from 'moment';

import{ Card } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import {MdDelete, MdModeEdit} from 'react-icons/md';

import { useDispatch,useSelector } from 'react-redux'

import { deleteGame } from '../actions/gameActions'
 

const Game = ({game})=>{
    const [user,setUser] = useState()
    const userState = useSelector((state)=>state.user)
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },{userState})
    const dispatch = useDispatch()
    return (
       <Card className = 'rounded py-3 my-3'>
           <Card.Img variant="top" src={game.image}></Card.Img>
           <Card.Body>
               <Card.Title style={{color:'red'}}>{game.title}</Card.Title>
               <Card.Subtitle>{moment(game.createdAt).fromNow()}</Card.Subtitle>
           </Card.Body>
          
          {
              user?.user?._id === game.creatorId ?(
                <Card.Footer style={{display:'flex', justifyContent:'space-between'}} className='bg-white pb-0'>
                <LinkContainer to ={`/update/${game._id}`} style={{cursor:'pointer'}}>
                    <MdModeEdit color = 'blue' size={20} />
                </LinkContainer>
                <MdDelete color = 'red' style={{cursor:'pointer'}}size = {20} 
                  onClick={() => {
                      dispatch(deleteGame(game._id))
                    }}
                />
            </Card.Footer>
              ): null

          }
           
  
       </Card>
    )
}


export default Game
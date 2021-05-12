import React, { useState, useEffect } from 'react';
import Game from '../components/Game';

import { useDispatch, useSelector } from 'react-redux'
import { fetchGames } from '../actions/gameActions.js'

import {Spinner,Row,Col} from 'react-bootstrap';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const games = useSelector((state) => state.games)   
    useEffect(() => {
        if(!games[0]){
            dispatch(fetchGames())
        }
    }, [dispatch])

    return (
        <>
         {
            !games.length ? <Spinner animation='border' /> : 
            <Row>
                {
                    games.map((game)=>(
                        <Col
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className='m-auto'
                        key = {game._id}>
                            <Game game = {game} />
                        </Col>
                    ))
                    
                }
            </Row>
         }
        </>
    )
}

export default HomeScreen;
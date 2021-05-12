import React, { useState, useEffect } from 'react';
import Game from '../components/Game';

import {Spinner,Row,Col} from 'react-bootstrap';
import { fetchGames } from '../axios/index';

const HomeScreen = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const {data} = await fetchGames()
            console.log(data);
            setGames(data)
            
        }
        getGames()
    },[])

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
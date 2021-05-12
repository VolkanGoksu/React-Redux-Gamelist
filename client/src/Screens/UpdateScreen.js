import React from 'react'
import { Container} from 'react-bootstrap';
import UpdateGame from '../components/UpdateGame.js';

import {useParams} from 'react-router-dom';
const UpdateScreen = () =>{
    const {id} = useParams()
    return(
        <>
        <Container>
            <UpdateGame id={id} />
        </Container>
        </>
    )
}

export default UpdateScreen
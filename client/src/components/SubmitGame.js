import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64';
import { Form, Button } from 'react-bootstrap';

import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createGame} from '../actions/gameActions'


const SubmitGame = () => {
    const [gameData, setGameData] = useState({
        title: '',
        image: ''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(createGame(gameData))
                history.push('/')
            }}>
                <Form.Group>
                    <h1>Oyun Ekle</h1>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Oyun ismi</Form.Label>
                    <Form.Control name='title' type='text' onChange={(e) =>
                        setGameData({ ...gameData, title: e.target.value })
                    }

                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <ReactFileBase64
                        type='file'
                        multiple={false}
                        onDone={({base64})=>{
                            setGameData({...gameData,image:base64})
                        }}
                    />
                </Form.Group>
                <Button type='submit' block>Ekle</Button>
            </Form>
        </>
    )
}

export default SubmitGame

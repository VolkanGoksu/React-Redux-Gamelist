import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64';
import { Form, Button } from 'react-bootstrap';

import * as api from '../axios/index.js';
const SubmitGame = () => {
    const [gameData, setGameData] = useState({
        title: '',
        image: ''
    })
    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
                api.createGame(gameData)
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

import React, { useEffect, useState } from 'react'
import ReactFileBase64 from 'react-file-base64';
import { Form, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { updateGame } from '../actions/gameActions'

import { useDispatch } from 'react-redux'

import { fetchMemory } from '../axios/index.js'

const UpdateGame = ({ id }) => {
    const dispatch = useDispatch()
    const [gameData, setGameData] = useState({
        title: '',
        image: ''
    })

    useEffect(() => {
        const getGame = async () => {
            
        }
        getGame()
    }, [id])
    const history = useHistory()
    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(updateGame(id, gameData))
                history.push('/')
            }}>
                <Form.Group>
                    <h1>Düzenle</h1>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Oyun ismi</Form.Label>
                    <Form.Control name='title' type='text' onChange={(e) =>
                        setGameData({ ...gameData, title: e.target.value })
                    }
                    value = {gameData.title}

                    ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <ReactFileBase64
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => {
                            setGameData({ ...gameData, image: base64 })
                        }}
                    />
                </Form.Group>
                <Button type='submit' block>Ekle</Button>
            </Form>
        </>
    )
}

export default UpdateGame

import React from 'react'
import ReactFileBase64 from 'react-file-base64';
import { Form, Button } from 'react-bootstrap';

const SubmitGame =() => {
    return (
        <>
            <Form>
                <Form.Group>
                    <h1>Oyun Ekle</h1>
                </Form.Group>
                <Form.Group>
                     <Form.Label>Oyun ismi</Form.Label>
                     <Form.Control name='title' type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                   <ReactFileBase64 
                    type = 'file'
                    multiple = {false}
                    onDone={()=>{}}
                   />
                </Form.Group>
                <Button type='submit' block>Ekle</Button>
            </Form>
        </>
    )
}

export default SubmitGame

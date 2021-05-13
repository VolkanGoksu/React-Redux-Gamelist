import React, { useState } from 'react'

import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import Message from '../components/Message.js'

import {useDispatch,useSelector} from 'react-redux';
import { signup, signin } from '../actions/userAction.js'

export const AuthScreen = ({history}) => {
    const initialFormData = {
        name :'',
        email:'',
        password:'',
        confirmPassword:''
        
    }
    const userState = useSelector((state)=>state.user)
    const {error} = userState
    const [form, setForm] = useState(initialFormData)
    const [login, setLogin] = useState(true)

    const dispatch = useDispatch();
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        {
                            login ?
                                <Form
                                     onSubmit={(e)=>{
                                        e.preventDefault();
                                        if(login){
                                            dispatch(signin(form,history))
                                        }
                                    }}
                                
                                className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3'>Giriş Yap</h1>
                                    {error && <Message>{error}</Message>}
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                             type='text'
                                             type='email'
                                             onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                              }
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Şifre</Form.Label>
                                        <Form.Control
                                            type='password'
                                            onChange={(e) =>
                                                setForm({ ...form, password: e.target.value })
                                              }
                                        ></Form.Control>
                                    </Form.Group >
                                    <Button type='submit' >Giriş Yap</Button><hr></hr>
                                Bir hesabın yok mu?{' '}<span onClick={(e) => setLogin(!login)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                                        Kayıt ol
                                </span>
                                </Form>

                                :
                                (
                                    <Form
                                    onSubmit={(e)=>{
                                        e.preventDefault();
                                        if(!login){
                                            dispatch(signup(form,history))
                                        }
                                    }}
                                    className='align-content-center mt-3'>
                                        <h1 className='text-center mb-3'>Kayıt Ol</h1>
                                        {error && <Message>{error}</Message>}

                                        <Form.Group>
                                        <Form.Label>Adınız</Form.Label>
                                            <Form.Control
                                                type='text'
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                  }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type='email'
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                  }
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Şifre</Form.Label>
                                            <Form.Control
                                                type='password'
                                                onChange={(e) =>
                                                    setForm({ ...form,  password: e.target.value })
                                                  }
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Şifrenizi doğrulayın</Form.Label>
                                            <Form.Control
                                                type='password'
                                                onChange={(e)=>setForm({...form,confirmPassword:e.target.value})}
                                            ></Form.Control>
                                        </Form.Group>

                                        <Button  type='submit'>
                                            Kayıt ol
                                        </Button><hr></hr>
                                        Hesabın var mı ? {' '}<span onClick={(e) => setLogin(!false)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                                        Giriş yap 
                                        </span>
                                    </Form>
                                )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

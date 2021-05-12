import React, { useState } from 'react'

import { Container, Col, Row, Form, Button } from 'react-bootstrap'
export const AuthScreen = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        {
                            login ?
                                <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3'>Giriş Yap</h1>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Şifre</Form.Label>
                                        <Form.Control
                                            type='password'
                                        ></Form.Control>
                                    </Form.Group >
                                    <Button type='submit' >Giriş Yap</Button><hr></hr>
                                Bir hesabın yok mu?{' '}<span onClick={(e) => setLogin(!login)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                                        Kayıt ol
                                </span>
                                </Form>

                                :
                                (
                                    <Form className='align-content-center mt-3'>
                                        <h1 className='text-center mb-3'>Kayıt Ol</h1>

                                        <Form.Group>
                                        <Form.Label>Adınız</Form.Label>
                                            <Form.Control
                                                type='text'
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type='email'
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Şifre</Form.Label>
                                            <Form.Control
                                                type='password'
                                            ></Form.Control>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Şifrenizi doğrulayın</Form.Label>
                                            <Form.Control
                                                type='password'
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

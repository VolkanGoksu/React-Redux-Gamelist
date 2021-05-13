import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Navbar, Nav, Button, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


import { useLocation, useHistory } from 'react-router-dom'

import { BiGame } from 'react-icons/bi';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BiLogOutCircle } from 'react-icons/bi';

import { logout } from '../actions/userAction.js';

import decode from 'jwt-decode';
const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState()

    const exit = async (id) => {
        await dispatch(logout(id))
        setUser(null)
        history.push('/')
    }

    useEffect(() => {
        
        if (localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        const accessToken = user?.accessToken
        if(accessToken){
            const decudeAccessToken = decode(accessToken)
            if(decudeAccessToken.exp*1000<new Date().getTime()){
                exit(user.user._id)
            }
        }
    }, [location, user])

    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#home">GameList</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        {user ? (
                            <>
                                <LinkContainer to='/create'>
                                    <Nav.Link>
                                        <Button variant='outline-info'>
                                            <BiGame className='mr-2' size={20} />
                                                Oyun Ekle
                                              </Button>
                                    </Nav.Link>
                                </LinkContainer>

                                <Nav.Link>
                                    <Button
                                        onClick={(e) => {
                                            exit(user.user._id)
                                        }}
                                        variant='outline-danger'
                                                                  >
                                        <BiLogOutCircle size={20} className='mr-2' />
                                         Çıkış yap
                                        </Button>
                                </Nav.Link>
                            </>
                                 ) : (
                            <LinkContainer to='/auth'>
                                <Nav.Link>
                                    <Button variant='outline-light'>
                                        <RiLoginBoxFill size={20} className='mr-2' />
                                          Giriş yap
                                   </Button>
                                </Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default Header

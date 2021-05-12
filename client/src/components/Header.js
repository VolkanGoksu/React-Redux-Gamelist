import React from 'react';

import { Navbar, Nav, Button, } from 'react-bootstrap'
import{ LinkContainer } from 'react-router-bootstrap';

import {BiGame} from 'react-icons/bi';
import {RiLoginBoxFill} from 'react-icons/ri';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#home">GameList</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <LinkContainer to='/create'>
                            <Nav.Link>
                                <Button variant='outline-info'> <BiGame size={20} /> Oyun Ekle</Button>
                            </Nav.Link>
                        </LinkContainer>       
                        <LinkContainer to='/auth'>
                            <Nav.Link>
                                <Button  variant='outline-light'> <RiLoginBoxFill size={20}/> Giriş Yap</Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default Header

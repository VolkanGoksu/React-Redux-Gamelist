import React from 'react';

import { Navbar, Nav, Button, } from 'react-bootstrap'
import{ LinkContainer } from 'react-router-bootstrap';

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
                                <Button>Oyun Ekle</Button>
                            </Nav.Link>
                        </LinkContainer>       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
export default Header

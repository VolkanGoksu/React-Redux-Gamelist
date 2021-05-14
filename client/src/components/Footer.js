import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { AiFillGithub ,AiFillLinkedin} from 'react-icons/ai'
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap'


const footer = () => {
    return (
        <footer>
            <Row className='fixed-bottom' style={{ background: '#e95420' }}>
                <Col className='text-center py-1 text-white'>
                    <NavItem className='text-white'  as='a' href='https://github.com/VolkanGoksu' ><AiFillGithub size={30} /> </NavItem >
                        <NavItem className='text-white'as='a' href='https://www.linkedin.com/in/volkan-g%C3%B6ksu-7234b0211/github'><AiFillLinkedin size={30} /> </NavItem >
                </Col>

            </Row>



        </footer>
    )
}
export default footer;
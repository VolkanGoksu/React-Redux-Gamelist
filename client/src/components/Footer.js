import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const footer = () =>{
  return(
      <footer>
          <Row  className='fixed-bottom' style={{background:'black'}}>
              <Col className ='text-center py-1 text-white'>
                 Copyright &copy; GameList
              </Col>
          </Row>
      </footer>
  )
}
export default footer;
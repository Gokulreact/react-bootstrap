import React from 'react';
import './card.style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRight } from 'react-bootstrap-icons';


const Cards = (props)  =>(
    
    <div className='card-container'>

    <Container>
  <Row>
    <Col xs={6}>{props.linksDatas}</Col>
    <Col xs={3}><i class="bi bi-pencil-square"></i></Col>
    <Col xs={3}>Delete</Col>
  </Row>
  
</Container>
    
   
    </div>
    
)
export default Cards
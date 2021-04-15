import React from 'react';
import './card.style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { Link } from "react-router-dom";


const Cards = (props)  => {
  //console.log(props)
 

  return(

 
    
    <div className='card-container'>
   
    <Container fluid>
  <Row>
    <Col sm={9}>{props.total.subcategory}</Col>
    <Col sm={3}>
      <Row>
      <Col sm={6}>
      <Link 
      to={{ pathname: `/edit`, state: {
        subdatas : props.total
      } }}>
     
       
      <BiEdit />
      </Link>
      </Col>
        
         <Col sm={6}><MdDelete /></Col>
       </Row>
    </Col>

    {/*<Col xs={6}>{props.linksDatas}</Col>
    <Col xs={3}><BiEdit /></Col>
<Col xs={2}><MdDelete /></Col>*/}
  </Row>
  
</Container>
    
   
    </div>
    
);
};

export default Cards;
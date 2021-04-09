import React from "react";
import AccordionShow from "./AccordionShow";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import api from "../../api/jsonconnect";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
const AccordionData = (props) => {
 //console.log("Have Data", props)
 const  subDatas = (() =>
  api.get("/subdatas/").then((respons) => {
    return respons.data;
  }))
  
  
 
subDatas()


  
  const renderPropsData = props.contacts.map((contact) => {
    return (
      <div>
      <AccordionShow contact={contact} />
      
      {/*
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={contact.id}>
            {contact.category}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={contact.id}>
            <Card.Body>
            <a href="contact" key={contact.id} >{contact.category}</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
      */}
        </div>
        )
      ;
  });
  
 
  return <div>{renderPropsData}
  <h1>{subDatas}</h1>
  <Link to="/addCategory">
        <Button variant="primary">Add Category</Button>
        </Link></div>;
};

export default AccordionData;

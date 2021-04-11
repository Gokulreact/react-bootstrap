import React from "react";
import AccordionShow from "./AccordionShow";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import api from "../../api/jsonconnect";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
const AccordionData = (props) => {
 console.log("Have Data", props)

/*
const myData = function(data) {
  data.map((x) => {
    console.log(x.id)
  })
  
}

 api.get('/subdatas/')
.then(response => {
  const data = response.data;
  console.log(data)
  return data
  
})
.then(myData)
.catch(err => {
  console.log('Error: ', err);
})
  */
  const renderPropsData = props.contacts.map((contact) => {

    //console.log(contact)
    
    
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
  
  <Link to="/addCategory">
        <Button variant="primary">Add Category</Button>
        </Link></div>;
};

export default AccordionData;

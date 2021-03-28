import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


const AccordionShow = (props) =>{

    const {id, category} = props.contact;
    return(
        <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={id}>
            {category} Accordio data
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={id}>
            <Card.Body >
            <a href="header"  key={id}>Subcategory Name: {category}</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>

    );
}

export default AccordionShow
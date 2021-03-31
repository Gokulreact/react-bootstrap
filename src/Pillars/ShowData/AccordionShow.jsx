import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
// import {Link} from 'react-router-dom'


const AccordionShow = (props) =>{
//  console.log(props)
    const {id, category} = props.contact;
    
    return(
      <div>
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
       {/* <Link to="/addCategory">
        <Button variant="primary">Add Category</Button>
    </Link>*/}
       
        </div>

    );
}

export default AccordionShow
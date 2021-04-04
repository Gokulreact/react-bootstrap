import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const AccordionShow = (props) =>{
    console.log(props);
   const {id, category, link, subcat} = props.contact;
   console.log({subcat})
    
    return(
      <div>  
        <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={id}>
            {category} Name
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={id}>
            <Card.Body >
           
           
            <a href="header"  key={id}>Subcategory Name: {category}</a>

            <Link to={{
              pathname: "/addsubcategory",
              aboutProps:{
                id:{id},
                name:{category},
              }
            }} 
            >
            <Button variant="primary" categoryName={props.category}>Add Sub Category</Button>
             </Link>
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
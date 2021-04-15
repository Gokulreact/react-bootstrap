import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import api from "../../api/jsonconnect";
import SubCatDatas from "./SubcatData"





const AccordionShow = (props) =>{
    
    const {id, category, link, subcat} = props.contact;
   //console.log({subcat})
   
   console.log(props);

   
  

 
    
   
    return(
      
      <div>  
        <Accordion defaultActiveKey="0">
        <Card>
        
          <Accordion.Toggle as={Card.Header} eventKey={id}>
            {category} Name
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={id}>
            <Card.Body >
            
           
           
            <SubCatDatas catName = {category}/>
            <Link to={{
              pathname: "/addsubcategory",
              aboutProps:{
                id:{id},
                name:{category},
              }
            }} 
            >
            
            <Button variant="primary" categoryname={props.category}>Add Sub Category</Button>
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
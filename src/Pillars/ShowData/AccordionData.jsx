import React from "react";
import AccordionShow from "./AccordionShow";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import api from "../../api/jsonconnect";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
const AccordionData = (props) => {
 //console.log("Have Data", props)

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
    const deleteCatHandler =(id) =>{
      api.get(`http://localhost:3004/subdatas/`)
      .then(
        res => {
          var datas = {...res.data}
          const headers = Object.values(datas)
          //var datcat = datas.tostring()
          //console.log(typeof(datcat), datcat)
      
          console.log(headers)
          
          const result = (headers.filter(word => word.catid === id)) 
        
        var catlen = result.length;
        console.log(catlen)  
        if(catlen === 0){
          confirmAlert({

            title: 'Confirm to Delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                
              },
              {
                label: 'No',
                //onClick: () => alert('Click No')
              }
            ]
          });
        
        }else{
          confirmAlert({

            title: 'Please make Application Empty',
            message: 'You have dats in Application list',
            buttons: [
              {
                label: 'Ok',
                
              },
              // {
              //   label: 'No',
              //   //onClick: () => alert('Click No')
              // }
            ]
          });
        }      



          
          
        
          

         
          //console.log(datas.every(catdataid))
          
        }
       
       
        )
       
        
        
        

         
        }
       
      
    
    return (
      <div >
      <AccordionShow 
      contact={contact} 
      clickHander={deleteCatHandler}
      />
      
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
  
 
  return <div className="AccordionBox">
  <Container fluid>
  <Row>
    <Col  md={{ offset: 9 }} lg={{ offset: 10 }} xs={{ offset: 6 }}> <Link to="/addCategory">
    <Button variant="primary">Add Category</Button>
    </Link>
   </Col>
    
  </Row>
  <Row>
  
    <Col >
    <div className="Acc">
     {renderPropsData}
     </div></Col>
  </Row>
</Container>
 
  
  </div>;
};

export default AccordionData;

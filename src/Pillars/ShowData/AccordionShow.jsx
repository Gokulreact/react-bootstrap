import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import api from "../../api/jsonconnect";
import SubCatDatas from "./SubcatData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const AccordionShow = (props) => {
  const { id, category, link, subcat } = props.contact;
  //console.log({subcat})

 // console.log(props);

  //  deleteCat = () => {
  //   console.log("id");
  // }

  
  
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={id}>
            <Container fluid>
              <Row>
                <Col lg="10"  xs="9">
                  <Row>
                    <Col md={{  offset: 2 }}>
                      <h6>{category}</h6>
                    </Col>
                  </Row>
                </Col>
                <Col   lg="2" xs="3">
                  <Row>
                    <Col sm lg="3" xs="6">
                    <Link 
      to={{ pathname: `/editCategory`, state: {
        Catdetails : props.contact
      } }}>
     
       
      <h6>

      <BiEdit />
    </h6>
      </Link>  
                    
                    
                    </Col>
                    <Col sm lg="3" xs="6">
                      <h6  >
                        <MdDelete onClick={ () => props.clickHander(props.contact.id)} className="Chover"/>
                      </h6>
                    </Col>
                  </Row>
                </Col>
               
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>
              <SubCatDatas catId={id} />
              <Link
                to={{
                  pathname: "/addsubcategory",
                  aboutProps: {
                    id: { id },
                    name: { category },
                  },
                }}
              >
                <Button variant="primary" categoryname={props.category}>
                  Add Application
                </Button>
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
};

export default AccordionShow;

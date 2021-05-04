import React, {Component} from "react";
import AccordionShows from "./AccordionShows";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import api from "../../api/jsonconnect";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AccordionDatas extends Component{
constructor(props){
    console.log(props)
    super(props);
    this.state = {

    }
}





renderPropsData(props){
  console.log(props)
    props.contacts.map((contact) => {
        console.log(contact)
    return(
                 <div >
                <AccordionShows
                contact={contact}
                //clickHander={deleteCatHandler}
                />
                </div>
    )
}    )
}

render(){
    return(
        <div>
        <div className="AccordionBox">
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
           {this.renderPropsData(this.props)}
           </div></Col>
        </Row>
      </Container>
       
        
        </div>;
        </div>
    )
}

}

export default AccordionDatas;
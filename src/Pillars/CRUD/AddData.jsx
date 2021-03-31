import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

class AddData extends Component {
  constructor(){
    super();
     this.state = {
      category: " ",
    };

  }
  

  add =(e) =>{
     e.preventDefault();
    if(this.state.category === ""){
      alert ("Please enter category");
      return;
    } 
    //console.log(this.state)
    this.props.addCategoryHandler(this.state);
    this.setState({category:""});
    //this.props.history.push("/")
    console.log(this.props)
    //alert("helo")
  }
  
  render() {
    return (
      <div className="addBox">
      <Container>
        
       <Form onSubmit={this.add}>
          <Form.Group controlId="formCategoryName" as={Row} >
            <Form.Label column sm="3">
              Category Name
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" 
               placeholder="Enter category Name"
               value ={this.state.category}
               onChange ={(e) => 
                 this.setState({category: e.target.value})
                } />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" >
          Submit
          </Button>
        
        </Form>
             
             
        </Container>

        
      </div>
    );
  }
}

export default AddData;

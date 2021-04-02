import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class AddSubCat extends Component {

    constructor(){
        super();
         this.state = {
          category:"Gokul",
          subcategory: " ",
          link:""
        };
    
      }


    addSub =(e) =>{
        e.preventDefault();
       if(this.state.subcategory === "" || this.state.link ===""){
         alert ("Please enter Fileds");
         return;
       } 
      // console.log("have sub data");
       this.props.addSubCatHandler(this.state);
       //console.log(this.state)
       this.setState({subcategory:"", link:""});
       //alert("helo")
     }


  render() {
    return (
      <div className="addBox">
        <Container>
          <Form onSubmit={this.addSub}>
            <Form.Group controlId="formSubCategoryName" as={Row}>
              <Form.Label column sm="3">
                Subcategory Name
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  placeholder="Enter Sub Category Name"
                  value={this.state.subcategory}
                  onChange={(e) => {
                    this.setState({ subcategory: e.target.value });
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="formlink" as={Row}>
              <Form.Label column sm="3">
                Link URL
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  placeholder="Enter Link URL"
                  value={this.state.link}
                  onChange={(e) => {
                    this.setState({ link: e.target.value });
                  }}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddSubCat;

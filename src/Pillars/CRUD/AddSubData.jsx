import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

class AddSubData extends Component {
  constructor(props){
   // console.log(typeof(props.categoryName))
   // console.log(props)
   // console.log(props.location.aboutProps.name)
   
    var catName = props.location.aboutProps.name.category;
    var catId = props.location.aboutProps.id.id;
    //console.log(props.location.aboutProps.name)
    super(props);
     this.state = {
      catid:catId,
      category: catName,
      subcategory:"",
      link:""
    };
    //console.log(this.state.id)

  }
  

  add =(e) =>{
     e.preventDefault();
    if(this.state.subcategory === "" || this.state.link === ""){
      alert ("Please enter All fields");
      return;
    } 
    this.props.addSubCat(this.state);
    this.setState({subcategory:"", link:""})
    //this.props.history.push("/")
  }
  
  render() {
    return (
      <div className="addBox">
      <Container>
        
       <Form onSubmit={this.add}>
          <Form.Group controlId="formSubCategoryName" as={Row} >
            <Form.Label column sm="3">
              Sub Category Name
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" 
               placeholder="Enter Sub category Name"
               value ={this.state.subcategory}
               onChange ={(e) => 
                 this.setState({subcategory: e.target.value})
                } />
            </Col>
          </Form.Group>
          <Form.Group controlId="Link" as={Row} >
            <Form.Label column sm="3">
              Link URL
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" 
               placeholder="Enter Link URL"
               value ={this.state.link}
               onChange ={(e) => 
                 this.setState({link: e.target.value})
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

export default AddSubData;

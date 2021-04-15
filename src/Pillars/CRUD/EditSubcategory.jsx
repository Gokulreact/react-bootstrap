import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

class EditSubcategory extends React.Component{
   constructor(props) {
       super(props);
      console.log(props)
      const { id, subcategory, link, category, catid } = props.location.state.subdatas;
      this.state = {
          id,
          subcategory,
          link,
          category,
          catid
      };
   }
   update = (e) => {
    e.preventDefault();
    if (this.state.subcategory === "" || this.state.link === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    else{
        this.props.updateSubHandler(this.state);
        this.setState({ subcategory: "", link: "", category:"", catid :"" });
         this.props.history.push("/");
    }
    
  };

   render() {
    return (
        <div className="addBox">
        <Container>
          
         <Form onSubmit={this.update}>
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
    )
   }

}

export default EditSubcategory
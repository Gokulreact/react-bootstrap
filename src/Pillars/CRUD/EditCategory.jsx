import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';


class EditCategory extends Component{
    
    constructor(props){
        //console.log(props)
        super(props);

        const {id, category} = props.location.state.Catdetails;
        this.state = {
            category,
            id
        }
    }

    update = (e) =>{
        e.preventDefault();
        if (this.state.category === "") {
            alert("ALl the fields are mandatory!");
            return;
          }
          else{
            this.props.updateCatHandler(this.state);
            this.setState({ category: ""});
            this.props.history.push("/");
        }
    }
   
    render(){
        return(
        <div className="addBox">
        <Container>
            <Form onSubmit = {this.update}>
                <Form.Group controlID="formEditCategoryName" as={Row}>
                    <Form.Label column sm ="3">
                    
                    Category Name
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text"
                        placeholder="Enter Category Name"
                        value={this.state.category}
                        onChange = {(e)=>  this.setState({category: e.target.value})
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

export default EditCategory
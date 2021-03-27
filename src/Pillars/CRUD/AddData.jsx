import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddData extends Component {
  render() {
    return (
      <div className="addBox">
        <Form>
          <Form.Group controlId="formCategoryName" as={Row}>
            <Form.Label column sm="3">Category Name</Form.Label>
            <Col sm="8"><Form.Control type="text" placeholder="Enter category Name" /></Col>
            
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddData;

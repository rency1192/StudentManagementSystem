import React from "react";
import { Card, Container, Button ,Form} from "react-bootstrap";

function Login() {
  return (
    <div className="my-3">
    <Container>
      <Card>
        <Form >
          <Card.Header>
            
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                
                type="text"
                placeholder="Enter id"
                autoComplete="off"
                
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                
                type="text"
                placeholder="Enter name"
                autoComplete="off"
               
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
               
                type="text"
                placeholder="Enter address"
                autoComplete="off"
                
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  </div>
    
  )
}

export default Login
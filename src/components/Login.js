import React, {useState }from "react";
import { Card, Container, Button ,Form} from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let textChanged = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "passwoed") {
      setPassword(event.target.value);
    }
  };
  let loginuser = (event) => {
    
  };

  return (
    <div className="my-3">
    <Container>
      <Card>
        <Form onSubmit={loginuser}>
          <Card.Header>
            
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={textChanged}
                name="username"
                value={username}
                type="text"
                placeholder="Enter username"
                autoComplete="off"
                
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={textChanged}
                name="email"
                value={email}
                type="text"
                placeholder="Enter email"
                autoComplete="off"
               
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
               onChange={textChanged}
               name="password"
               value={password}
                type="text"
                placeholder="Enter password"
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
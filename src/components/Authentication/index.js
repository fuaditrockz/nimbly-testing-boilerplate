import React, { Component } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

class Authentication extends Component {
  render() {
    return (
      <Container 
        style={{
          paddingTop: 30
        }}
      >
        <Row style={{ marginBottom: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Card body>
              <h3>Login</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Your email will saving in our database.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Agree with our testing policy." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ textAlign: 'center' }}>
            <h5>Don't have an account? Please register here.</h5>
            <Button variant="success" type="submit">
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Authentication
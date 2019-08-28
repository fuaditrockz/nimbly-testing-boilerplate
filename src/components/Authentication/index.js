import React, { Component } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

import RegisterModal from './components/RegisterModal'

class AuthenticationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      setShow: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }


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
            <Button variant="success" type="submit" onClick={this.handleShow}>
              Register
            </Button>
          </Col>
        </Row>
        <RegisterModal 
          show={this.state.show}
          handleClose={this.handleClose}
        />
      </Container>
    )
  }
}

export default AuthenticationPage
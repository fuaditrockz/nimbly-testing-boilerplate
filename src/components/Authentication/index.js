import React, { Component } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

import RegisterModal from './components/RegisterModal'

class AuthenticationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      setShow: false,
      dataInput: {
        email: '',
        password: '',
        isAgree: false
      },
      validated: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  handleInputChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({ 
      dataInput: { 
        ...this.state.dataInput, 
        [e.target.getAttribute('name')] : value 
      } 
    })
  }

  handleSubmit(e) {
    if(e.currentTarget.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    this.setState({ validated: true })
    console.log(this.state.validated)
    /* console.log(this.state.dataInput) */
    e.preventDefault()
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
              <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.dataInput.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please insert your email or username.
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Your email will saving in our database.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.dataInput.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please insert your password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check 
                    name="isAgree"
                    type="checkbox" 
                    checked={this.state.dataInput.isAgree}
                    onChange={this.handleInputChange}
                    label="Agree with our testing policy."
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    You cannot login if you disagree with our policy.
                  </Form.Control.Feedback>
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
            <Button variant="success" onClick={this.handleShow}>
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
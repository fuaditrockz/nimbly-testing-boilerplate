import React, { Component } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataInput: {
        title: '',
        content: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      dataInput: {
        ...this.state.dataInput,
        [e.target.getAttribute('name')] : e.target.value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state.dataInput)
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <Container
      style={{
        paddingTop: 30
      }}
      >
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                      name="title" 
                      placeholder="Enter your title here..."
                      onChange={this.handleInputChange}
                      value={this.state.dataInput.title}
                    />                    
                  </Form.Group>

                  <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                      name="content" 
                      as="textarea" 
                      rows="4" 
                      placeholder="Type your content here..." 
                      onChange={this.handleInputChange}
                      value={this.state.dataInput.content}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PostForm
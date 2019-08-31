import React, { Component } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

class HelpPage extends Component {
  constructor(props) {
      super(props)
      this.state = {
          postsData: []
      }
  }

  UNSAFE_componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.setState({ postsData: res }))
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
            <ListGroup>
              {
                this.state.postsData.map((data, key) => (
                  <ListGroup.Item key={key}>
                    <h3>{ data.title }</h3>
                    <p>{data.body}</p>
                  </ListGroup.Item>   
                ))
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HelpPage
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Body extends Component {
  render() {
    return (
      <Container fluid className="body-main-component">
        <Row>
          <Col>
            <img alt="flower" src={require('../img/flower.jpg')} />
          </Col>
          <Col>
            <h2>싱싱하고 풍성한 도매시장에서 직접 구한 생화 가득</h2>
            <h2>원하시는 시간, 원하시는 장소로 배송해 드립니다.</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;

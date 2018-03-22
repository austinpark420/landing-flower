import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Body extends Component {
  render() {
    return (
      <Container fluid className="body-main-component">
        <Row>
          <Col>
            <img className="img-flower" alt="flower" src={require('../img/flower.png')} />
          </Col>
          <Col>
            <h2>1. 도매시장에서 바로 출발하는 상대할 수 없는 싱싱함</h2>
            <h2>2. 꽃집과 비교해서 말도 안 되는 장미의 풍성함</h2>
            <h2>3. 꽃 바구니, 배송비까지 포함된 놀라운 가격</h2>
            <h2>4. 원하시는 시간과 장소로 배송해 드립니다</h2>
            <h2>사무실로, 집으로 보내 보세요</h2>
            <br />
            <h2 className="flower-price">가격 50,000 원 (바구니, 장식, 퀵배송비 포함)</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;

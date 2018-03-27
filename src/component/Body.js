import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Body extends Component {
  constructor() {
    super();
    this.onOpenOrderModal = this.onOpenOrderModal.bind(this);
  }

  onOpenOrderModal() {
    console.log('hello!!');
  }

  render() {
    return (
      <Container fluid className="body-main-component">
        <Row>
          <Col lg="6" className="body-description">
            <div className="body-description-title">꽃으로 사랑을 표현 해보세요</div>
            <div className="body-description-detail">
              <li>도매시장 직배송에 의한 상상 그 이상의 싱싱함</li>
              <li>기존 꽃집과 비교해서 말도 안 되는 장미의 풍성함</li>
              <li>무료 고급 꽃바구니 + 무료 배송!</li>
              <li>원하시는 시간과 장소로 배송해 드립니다</li>
            </div>
            <div className="body-description-price">가격 50,000 원 (바구니, 장식, 퀵배송 포함)</div>
            <div className="open-modal order-button-div">
              <Button className="order-button" onClick={this.onOpenOrderModal}>주문하기</Button>
            </div>
          </Col>
          <Col lg="6" className="body-image">
            <div className="flower-image-container">
              <img className="flower-image" alt="flower" src={require('../img/flower.png')} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;

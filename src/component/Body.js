import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

// action
import { toggleOrderModal } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  toggleOrderModal: (state, type) => dispatch(toggleOrderModal(state, type))
});

class Body extends Component {
  static propTypes = {
    // actions
    toggleOrderModal: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.onOpenOrderModal = this.onOpenOrderModal.bind(this);
  }

  onOpenOrderModal() {
    this.props.toggleOrderModal(true, 'order');
  }

  render() {
    return (
      <Container fluid className="body-main-component">
        <Row>
          <Col lg="6" className="body-description">
            <div className="body-description-title">꽃바구니로</div>
            <div className="body-description-title">마음을 전달하세요</div>
            <div className="body-description-price">
              <span className="price-text">가격 <p className="amount">50,000</p>원</span>
            </div>
            <div className="body-description-detail">
              <ListGroup className="body-description-detail-inner">
                <ListGroupItem>도매시장 직배송으로 싱싱함 보장</ListGroupItem>
                <ListGroupItem>기존 꽃집 대비 2배 이상의 풍성함</ListGroupItem>
                <ListGroupItem>꽃바구니 + 배송비 포함 가격</ListGroupItem>
                <ListGroupItem>원하시는 시간과 장소로 배송해 드려요</ListGroupItem>
              </ListGroup>
            </div>
            <ListGroup className="body-description-caution">
              <ListGroupItem>현재 서울 지역만 배송</ListGroupItem>
              <ListGroupItem>수도권 지역은 별도상담</ListGroupItem>
              <ListGroupItem>배송 24시간 전 주문 필요</ListGroupItem>
            </ListGroup>
            <div className="open-modal order-button-div">
              <Button className="order-button" size="lg" onClick={this.onOpenOrderModal}>마음 보내기</Button>
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

export default connect(null, mapDispatchToProps)(Body);

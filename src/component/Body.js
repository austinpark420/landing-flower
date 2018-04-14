import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
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
          <Col lg="7" className="body-description">
            <div className="body-description-title">꽃바구니로 마음을 전달하세요</div>
            <div className="body-description-detail">
              <div className="body-description-detail-inner">
                <li>도매시장 직배송으로 최상의 싱싱함</li>
                <li>기존 온라인/꽃집과 비교하여 2배 이상의 풍성함</li>
                <li>꽃바구니 + 배송비 포함 가격</li>
                <li>원하시는 시간과 장소로 배송해 드려요</li>
              </div>
            </div>
            <div className="body-description-price">가격 <p className="amount">50,000</p>원 (바구니, 장식, 퀵배송 포함)</div>
            <div className="body-description-caution">
              <div>- 현재 서울지역만 주문을 받고 있습니다.</div>
              <div>- 수도권 지역은 별도로 연락 주시기 바랍니다.</div>
              <div>- 배송 24시간 전에는 주문이 필요합니다.</div>
            </div>
            <div className="open-modal order-button-div">
              <Button className="order-button" size="lg" onClick={this.onOpenOrderModal}>마음 보내기</Button>
            </div>
          </Col>
          <Col lg="5" className="body-image">
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

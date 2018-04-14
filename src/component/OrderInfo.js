import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';

// action
import { toggleOrderModal } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  toggleOrderModal: (state, type) => dispatch(toggleOrderModal(state, type))
});

class OrderInfo extends Component {
  static propTypes = {
    // actions
    toggleOrderModal: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this._closeModal = this._closeModal.bind(this);
  }

  _closeModal() {
    this.props.toggleOrderModal(false, null);
  }

  render() {
    return (
      <Container fluid className="order-info-main-component">
        <div className="order-info-title">주문 성공</div>
        <div className="order-info-body">
          <div className="body-text">
            주문이 성공적으로 접수 되었습니다. 해당 금액 '50,000원'을 아래 계좌로 입금 하시면, 주문접수 후 확인 연락을 드리도록 하겠습니다.
          </div>
          <div className="body-list">
            <li>입금 금액: 50,000원</li>
            <li>입금 계좌: 237-076182-01-017</li>
            <li>은행명: 기업은행</li>
            <li>계좌주: 구일모</li>
          </div>
          <div className="body-confirm-button">
            <Button className="order-info confirm-button" onClick={this._closeModal}>확인</Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(OrderInfo);

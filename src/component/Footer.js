import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

// action
import { toggleOrderModal } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  toggleOrderModal: (state, type) => dispatch(toggleOrderModal(state, type))
});

class Footer extends Component {
  static propTypes = {
    // actions
    toggleOrderModal: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.onOpenOrderModal = this.onOpenOrderModal.bind(this);
  }

  onOpenOrderModal() {
    this.props.toggleOrderModal(true, 'contact-us');
  }

  render() {
    return (
      <Container fluid className="footer-main-component">
        <div className="contact-info">
          <div className="company-info">
            <span className="info-item">회사명: 쿠스랩</span>
            <span className="info-item">대표: 구일모</span>
            <span className="info-item">사업자번호: 606-466-9713</span>
            <span className="info-item">주소: 서울특별시 동작구 사당로2길 76 1101호</span>
          </div>
          <div className="contact-info">
            <span className="contact-email info-item">
              이메일: <a href="mailto: contact@kooslab.com">contact@kooslab.com</a>
            </span>
            <span className="contact-us-button" onClick={this.onOpenOrderModal}>문의하기</span>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Footer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// action
import { sendOrderForm } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  sendOrderForm: values => dispatch(sendOrderForm(values))
});

class OrderComponent extends Component {
  static propTypes = {
    // values
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,

    // actions
    sendOrderForm: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(values) {
    return new Promise((resolve, reject) => {
      const sendOrderPromise = this.props.sendOrderForm(values);
      sendOrderPromise.then((res) => {
        this.props.reset();
        resolve(res);
      }).catch((err) => reject(err));
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container fluid className="order-main-component">
        <div className="order-request-form">
          <form onSubmit={handleSubmit(this._onSubmit)}>
            <Row>
              <Col sm="6" className="purchaser-name order-form">
                <Label className="order-label">보내는 분 이름</Label>
                <Field name="username" component="input" className="order-field-form" />
              </Col>
              <Col sm="6" className="purchaser-email order-form">
                <Label className="order-label">보내는 분 이메일</Label>
                <Field name="email" component="input" className="order-field-form" />
              </Col>
              <Col sm="6" className="purchaser-phone-number order-form">
                <Label className="order-label">보내는 분 전화번호</Label>
                <Field name="phoneNumber" component="input" className="order-field-form" />
              </Col>
            </Row>
            <hr className="ui my-2 divider" />
            <Row>
              <Col sm="6" className="receiver-name order-form">
                <Label className="order-label">받는 분 이름</Label>
                <Field name="receiverName" component="input" className="order-field-form" />
              </Col>
              <Col sm="6" className="receiver-phone-number order-form">
                <Label className="order-label">받는 분 전화번호</Label>
                <Field name="receiverPhoneNumber" component="input" className="order-field-form" />
              </Col>
              <Col sm="12" className="receiver-address order-form">
                <Label className="order-label">받는 분 주소</Label>
                <Field name="receiverAddress" component="input" className="order-field-form" />
              </Col>
            </Row>
            <div className="card-message order-form">
              <Label className="order-label">카드에 메세지를 남겨보세요</Label>
              <Field name="message" component="textarea" className="order-field-form" />
            </div>
            <Button type="submit" className="order-component submit-button">전송하기</Button>
          </form>
        </div>
      </Container>
    );
  }
}

OrderComponent = reduxForm({
  form: 'orderComponent',
  fields: ['username', 'email', 'phoneNumber', 'receiverName', 'receiverPhoneNumber', 'receiverAddress', 'message']
})(OrderComponent);

export default connect(null, mapDispatchToProps)(OrderComponent);

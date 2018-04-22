import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// action
import { sendContactAndFeedback } from '../ducks/contact';
import { toggleOrderModal } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  sendContactAndFeedback: values => dispatch(sendContactAndFeedback(values)),
  toggleOrderModal: (state, type) => dispatch(toggleOrderModal(state, type))
});

class ContactUsComponent extends Component {
  static propTypes = {
    // values
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,

    // actions
    sendContactAndFeedback: PropTypes.func.isRequired,
    toggleOrderModal: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(values) {
    return new Promise((resolve, reject) => {
      const sendContactAndFeedbackPromise = this.props.sendContactAndFeedback(values);
      sendContactAndFeedbackPromise.then((res) => {
        this.props.reset();
        this.props.toggleOrderModal(false, null);
        resolve(res);
      }).catch((err) => reject(err));
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container fluid className="order-main-component">
        <div className="order-sub-main-container">
          <div className="contact-request-form">
            <div className="contact-request-form-ttile">해당 정보를 입력 해 주세요</div>
            <form onSubmit={handleSubmit(this._onSubmit)}>
              <Row>
                <Col sm="6" className="username-form">
                  <Label className="contact-us-label">이름</Label>
                  <Field name="username" component="input" className="contact-us-field-form" />
                </Col>
                <Col sm="6" className="email-form">
                  <Label className="contact-us-label">이메일 주소</Label>
                  <Field name="email" component="input" className="contact-us-field-form" />
                </Col>
              </Row>
              <div className="message-form">
                <Label className="contact-us-label">메세지</Label>
                <Field name="body" component="textarea" className="contact-us-field-form" />
              </div>
              <Button type="submit" className="contact-us submit-button">전송하기</Button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

ContactUsComponent = reduxForm({
  form: 'contact',
  fields: ['username', 'email', 'body']
})(ContactUsComponent);

export default connect(null, mapDispatchToProps)(ContactUsComponent);

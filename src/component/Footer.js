import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// action
import { sendContactAndFeedback } from '../ducks/contact';

const mapDispatchToProps = dispatch => ({
  sendContactAndFeedback: values => dispatch(sendContactAndFeedback(values))
});

class Footer extends Component {
  static propTypes = {
    // values
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,

    // actions
    sendContactAndFeedback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(values) {
    this.props.sendContactAndFeedback(values);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container fluid className="footer-main-component">
        <Row>
          <Col lg="6" className="contact-info">
            <h2>Contact Us</h2>
            <div className="contact-us-navigation">-- 문의사항 또는 개선 했으면 하는 피드백을 남겨주세요 --</div>
            <div>회사명: 쿠스랩</div>
            <div>대표: 구일모</div>
            <div>사업자번호: 606-466-9713</div>
            <div className="contact-email">
              이메일: <a href="mailto: contact@kooslab.com">contact@kooslab.com</a>
            </div>
            <div>주소: 서울특별시 동작구 사당로2길 76 1101호</div>
          </Col>
          <Col lg="6" className="contact-request-form">
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
          </Col>
        </Row>
      </Container>
    );
  }
}

Footer = reduxForm({
  form: 'contact',
  fields: ['username', 'email', 'body']
})(Footer);

export default connect(null, mapDispatchToProps)(Footer);

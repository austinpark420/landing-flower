import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Label, Input } from 'reactstrap';

class Footer extends Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
  }

  state = {
    value: ''
  }

  changeValue(value) {
    this.setState({value});
    console.log('Hello', this.state.value);
  }

  render() {
    return (
      <Container fluid className="footer-main-component">
        <Row>
          <Col xs="6" className="contact-info">
            <h3>Contact Us</h3>
            <div>회사명: 쿠스랩</div>
            <div>대표: 구일모</div>
            <div>사업자번호: 606-466-9713</div>
            <div className="contact-email">
              이메일: <a href="mailto: contact@kooslab.com">contact@kooslab.com</a>
            </div>
            <div>주소: 서울특별시 동작구 사당로2길 76 1101호</div>
          </Col>
          <Col xs="6" className="contact-request-form">
            <Form>
                <Row>
                  <Col xs="6">
                    <Label>이름</Label>
                    <Input type="text"/>
                  </Col>
                  <Col xs="6">
                    <Label>이메일 주소</Label>
                    <Input type="email" />
                  </Col>
                </Row>
                <Label>메세지</Label>
                <Input type="textarea" />
                <Button type="submit">전송하기</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;

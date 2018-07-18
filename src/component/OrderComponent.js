import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
// google 자동완성 관련 import
import PlacesAutocomplete from 'react-places-autocomplete';
import Script from 'react-load-script';
// 날짜 선택 관련 import
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// action
import { sendOrderForm } from '../ducks/order';
import validate from '../utils/validate';
import nameField from './fields/nameField';


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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      address: '',
      scriptLoaded: false,
      startDate: moment().add(2, 'days')
    };
  }

  // google 자동완성 관련 코드 시작
  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleAddress = ({ getInputProps, getSuggestionItemProps, suggestions }) => {
    return (
      <div>
        <input {...getInputProps()} name="recipientAddress" className="order-field-form"/>
        <div>
          {suggestions.map(suggestion => (
            <div {...getSuggestionItemProps(suggestion)}>
              <span>{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // google 자동완성 관련 코드 끝

  handleDateChange(date) { this.setState({startDate: date });}

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
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAU_SYD7w5lXsiqqDdTvQizQSOPiquwKyg&libraries=places&language=ko"
          onLoad={this.handleScriptLoad}
        />
        <div className="order-sub-main-container">
          <div className="order-request-form">
            <div className="order-request-form-title">해당 정보를 입력 해 주세요</div>
            <form onSubmit={handleSubmit(this._onSubmit)}>
              <Row>
                <Col sm="6" className="purchaser-name order-form">
                  <Label className="order-label">보내는 분 이름</Label>
                  <Field name="name" component={nameField} className="order-field-form" />
                </Col>
                <Col sm="6" className="purchaser-email order-form">
                  <Label className="order-label">보내는 분 이메일</Label>
                  <Field name="email" component={nameField} className="order-field-form" />
                </Col>
                <Col sm="6" className="purchaser-phone-number order-form">
                  <Label className="order-label">보내는 분 전화번호</Label>
                  <Field name="mobile" component={nameField} className="order-field-form" />
                </Col>
              </Row>
              <hr className="ui my-2 divider" />
              <Row>
                <Col sm="6" className="receiver-name order-form">
                  <Label className="order-label">받는 분 이름</Label>
                  <Field name="recipient" component={nameField} className="order-field-form" />
                </Col>
                <Col sm="6" className="receiver-phone-number order-form">
                  <Label className="order-label">받는 분 전화번호</Label>
                  <Field name="recipientMobile" component={nameField} className="order-field-form" />
                </Col>
                <Col sm="12" className="receiver-address order-form">
                  <Label className="order-label">받는 분 주소</Label>
                  {/* <Field name="recipientAddress" component={nameField} className="order-field-form" /> */}
                  {this.state.scriptLoaded && <PlacesAutocomplete
                    value={this.state.address}
                    onChange={address => this.setState({ address })}
                    >
                    {this.handleAddress}
                  </PlacesAutocomplete>}
                </Col>
                <Col sm="12" className="receiver-date order-form">
                  <Label className="order-label">배송날짜</Label>
                  <DatePicker
                    name="recipientDate"
                    className="order-field-form"
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    minDate={moment().add(2, 'days')}
                  />
                </Col>
              </Row>
              <div className="card-message order-form">
                <Label className="order-label">카드에 메세지를 남겨보세요</Label>
                <Field name="message" component="textarea" className="order-field-form" />
              </div>
              <Button type="submit" className="order-component submit-button">전송하기</Button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

OrderComponent = reduxForm({
  form: 'orderComponent',
  fields: ['name', 'email', 'mobile', 'recipient', 'recipientMobile', 'recipientAddress', 'recipientDate', 'message'],
  validate
})(OrderComponent);

export default connect(null, mapDispatchToProps)(OrderComponent);

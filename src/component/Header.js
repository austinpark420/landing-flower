import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <div className="header-main-title">바쁜 직장인을 위한 선물가게</div>
        <div className="header-body-text">
          <span>많이 바쁘시죠? 바쁜 당신을 대신해서 사랑하는 사람에게 행복을 전해드립니다.</span>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

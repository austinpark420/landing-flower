import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <div className="header-main-title">쿠스랩 = 바쁜 직장인을 위한 솔루션</div>
        <div className="header-body-text">
          <span>계속되는 야근에 회식까지.. 많이 바쁘시죠? 바쁜 당신을 대신해서 사랑하는 사람에게 행복을 전해드립니다.</span>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <div className="header-main-title">오늘도 바쁘신가요?</div>
        <div className="header-body-text">
          <div>자꾸만 미루지 마시고 바로 오늘</div>
          <div>사랑하는 사람에게 마음을 전달하세요</div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

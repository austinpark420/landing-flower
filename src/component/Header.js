import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <div className="header-main-title">
          <span className="first-title">오늘도 </span>
          <span className="second-title">바쁘신가요?</span>
        </div>
        <div className="header-body-text">
          <div>자꾸만 미루지 말고 바로 오늘</div>
          <div>
            <span>사랑하는 사람에게 마음을 </span>
            <span className="last-body-text">전달하세요</span>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

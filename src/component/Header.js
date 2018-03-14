import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <h1 className="main-title-header">당신의 여자친구는 안녕하신가요?</h1>
        <div>대한민국 개발자분들 고생 많으십니다</div>
        <div>개발하느라, 야근하느라, 주말에 출근까지... 많이 바쁘시죠.</div>
        <div>여러분의 여친분들도 고생이 많으십니다.</div>
        <div>다른 남친들은 주중에 저녁 데이트도 하고,</div>
        <div>주말엔 곧 벚꽃 구경도 간다는데...</div>
        <div>우리 회사는 제품 런칭이 4월이라고 하네요...</div>
        <div>삐진 여친님을 위해 선물 하나 여친님 직장으로 보내보시죠</div>
      </Jumbotron>
    );
  }
}

export default Header;

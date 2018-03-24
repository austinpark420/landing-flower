import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="header-main-component">
        <h1 className="main-title-header">바쁜 직장인 분들께 드리는 제안</h1>
        <div className="header-text">
          <div>이번 주는 팀 회식, 회사 워크샵, 프로젝트로 야근까지..</div>
          <div>우리나라 직장인 분들 참 고생이 많습니다</div>
          <div>그런데요, 여러분 못지 않게 애쓰시는 분들이 있죠?</div>
          <div>여러분들을 항상 이해해주고 응원하는 여러분의 여친님</div>
          <div>항상 여러분만 바라보시고 걱정 하시는 어머님</div><br />
          <div>특별한 기념일이 아닌 날, 깜짝 선물을 보내보세요</div>
          <div>선물 고르러 갈 시간, 쇼핑몰에서 선물 찾는 시간, 택배 배송 시간.. 우린 시간이 많이 없잖아요</div>
          <div>그래서 다음과 같이 제안을 드립니다</div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

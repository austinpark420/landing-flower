import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

// Auth
import Auth from '../component/auth/Auth';

const auth = new Auth();

class Header extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // auth 인증 관련 시작
  goTo(route) {
    this.history.replace(`/${route}`);
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }
  // auth 인증 관련 끝

  render() {
    const { isAuthenticated } = auth;
    console.log(this.handleAuthentication);
    return (
      <Jumbotron fluid className="header-main-component">
        {!isAuthenticated() && (
          <Button
            className="login"
            onClick={this.login}
          >
            Log In
          </Button>)
        }
        {isAuthenticated() && (
          <Button
            className="logout"
            onClick={this.logout}
          >
            Log Out
          </Button>)
        }
        <div className="header-main-title">
          <span className="first-title">오늘 하루는 </span>
          <span className="second-title">어떤가요?</span>
        </div>
        <div className="header-body-text">
          <div>오늘 같은 날 사랑하는 사람에게</div>
          <div>
            <span className="last-body-text">마음을 전하세요</span>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Utilities
import ReactGA from 'react-ga';
import ReactModalWindow from './utils/ReactModalWindow';

// Component
import { Header, Body, Footer } from './component';

// Style
import './index.css';

class App extends Component {
  state = {
    someData: null
  }

  componentWillMount() {
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-114772027-01');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="main-container app">
        <Header />
        <Body />
        <Footer />
        <ReactModalWindow />
      </div>
    );
  }
}

export default App;

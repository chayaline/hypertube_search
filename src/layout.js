import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import MainDiv from './MainDiv';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
}

  render() {
    return (
    <div id="layout">
          <Header />
          <Nav />
          <MainDiv />
          <Footer />
      </div>
  );
  }
}
export default Layout;

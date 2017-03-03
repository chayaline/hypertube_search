import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
}

  render() {
    return (
      <h1>
        HyperFastTube
      </h1>
  );
  }
}
export default Header;

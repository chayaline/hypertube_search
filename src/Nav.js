import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
}

  render() {
    return (
      <ul id="navMenu">
      <li> Home </li>
      <li> Search </li>
      <li> Users </li>
      <li> Profile </li>
      </ul>
  );
  }
}
export default Nav;

import React from 'react';
import SearchForm from './searchform'
import SearchResults from './SearchResults'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
}

  render() {
    return (
      <div id="mainDiv">
      <SearchForm />
      <SearchResults />
      </div>
  );
  }
}
export default Header;

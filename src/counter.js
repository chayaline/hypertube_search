import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
        <form>
        <input type="text" value={this.state.count}/>
        </form>
    );
  }
}
export default Counter;

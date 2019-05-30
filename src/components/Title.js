import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h2 className="f2 fw6 mb5">
        {this.props.children}
      </h2>
    );
  }
}

export default Title;

import React, { Component } from 'react';
import { Link } from 'react-router';

class TitleParagraph extends Component {
  render() {

    const {
      title,
      paragraph
    } = this.props;

    return (
        <div>
          <h2 className="f2 fw4">
            {title}
          </h2>
          <p className="fw4 f5 pb3 black-60 lh-copy">
            {paragraph}
          </p>
        </div>
    );
  }
}

export default TitleParagraph;
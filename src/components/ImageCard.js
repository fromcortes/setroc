import React, { Component } from 'react';
import classNames from 'classnames';

import Button from './Button';
import H from './H';

class ImageCard extends Component {
  render() {

    const {
      description,
      href,
      image,
      name,
    } = this.props;

    var classes = ({
      'card items-start pr4-l pr3-m pb4-ns pb3 relative w-33-l w-50-m w-100': true
    });

    return (
      <div className={classNames(classes)}>
        <a href={href} target="_blank" rel="nofollow" className="dib dim br4 link pointer up">
          <div className="br3 relative w-100">
            <img className="br3 shadow" src={image} alt={name} />
          </div>
          <div className="pt3 pb4" >
            <div className="flex items-center justify-between">
              <H size={2}>{name}</H>
              <div className="nr2">
                <Button href={href} name="View" />
              </div>
            </div>
            <p className="black-70 f5 lh-copy mt0 mb0">
              {description}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default ImageCard;

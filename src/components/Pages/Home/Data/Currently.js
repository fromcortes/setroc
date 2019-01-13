import React, { Component } from 'react';
import { Link } from 'react-router';

import Title from '../../../Title';

class Currently extends Component {
  render() {
    return (
      <div>
        <Title
          title="I'm Currently..."
          toolTipText="💪">
        </Title>
        <div className="fw4 lh-copy">
          <a href="mailto:hi@cortes.us" className="dn-l db bg-gradient br2 link pa3">
            <h2 className="white f5 fw5 mv0">Looking for a new Full-Time role or freelance work! &rarr;</h2>
          </a>
          <h4 className="db-l dn fw6 pv1 i shine bg-text-clip">
            Looking for a new full-time role and freelance projects!
          </h4>
          <h4 className="fw4 pv1">Making a collective gifting tool called
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="http://thegiftatlas.com">
              The Gift Atlas
            </a>
          </h4>
          <h4 className="fw4 pv1">Making a toolkit for designers named
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="http://yerframe.com">
              Yerframe
            </a>
          </h4>
          <h4 className="fw4 pv1">Producing music as
            <Link className="link link-underlined rainbow-hover black ml1 fw6"
              rel="nofollow" to="/music">
              Cordio
            </Link>
          </h4>
          <h4 className="fw4 pv1">Writing articles on
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="http://blog.cortes.us">
              The Rate of Change
            </a>
          </h4>
          {/*
          <h4 className="fw4 pv1">Building a life-tracking tool called
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://livtra.co">
              Livtra
            </a>
          </h4>
          */}
          <h4 className="fw4 pv1">Writing a book called
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://twitter.com/oversolving">
              Oversolving
            </a>
          </h4>
          <h4 className="fw4 pv1">Building things for others at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://usequarry.com">
              Quarry
            </a>
          </h4>
          <h4 className="fw4 pv1">Curating inspiration for others at
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://instagram.com/calligritype">
              Calligritype
            </a> and
            <a className="link link-underlined rainbow-hover black ml1 fw6"
              target="_blank" rel="nofollow" href="https://instagram.com/illustree">
              Illustree
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Currently;

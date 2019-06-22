import React, { Component } from 'react';

import Logo from './Logo';
import Today from './Today';

class Header extends Component {
  render() {
    return (
      <div className="flex pa4 justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <a className="f5 mb0 mt1 ml3">Dennis Cortés</a>
        </div>
        <div className="flex">
          <div className="br-pill bg-white-20 flex items-center shadow">
            <a href="#" className="dim ph3 pt1">
              <img src='https://icon.now.sh/restore/696969' alt='vintage restore icon' />
            </a>
            <a href="#" className="dim bl b--black-10 ph3 pt1">
              <img src='https://icon.now.sh/today/696969' alt='modern today icon' />
            </a>
          </div>
          <div className="pl4">
            <Today />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

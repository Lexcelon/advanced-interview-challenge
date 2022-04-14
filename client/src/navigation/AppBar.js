import React, { Component } from 'react';

// Components
import CustomAppBar from './CustomAppBar';

// Images
import LexcelonLogo from '../images/LexcelonLogo.png';

// Constants
const LINKS = [
  {
    slug: '/',
    text: 'Home',
  }
];

class AppBar extends Component {
  render() {
    return (
      <CustomAppBar
        logo={LexcelonLogo}
        logoDescription='Lexcelon Logo'
        links={LINKS}
        backgroundColor={'white'}
        textColor={'grey'} />
    );
  }
}

export default AppBar;

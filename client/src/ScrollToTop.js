/*
 * Copyright © 2021 Lexcelon LLC <info@lexcelon.com>
 * Licensed for non-distributable use
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(ScrollToTop);

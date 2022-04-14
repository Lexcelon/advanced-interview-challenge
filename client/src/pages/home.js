import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Typography variant='h1' style={{ textAlign: 'center', marginTop: '1em' }}>Hello, world!</Typography>
      </Container>
    );
  }
}

Home.propTypes = {
  setError: PropTypes.func.isRequired,
  setSuccess: PropTypes.func.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from './styles';

const SpinnerComponent = props => (
  <Container>
    <CircularProgress
      size={props.size}
      thickness={2}
    />
  </Container>
);

SpinnerComponent.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
};

SpinnerComponent.defaultProps = { size: 110, className: null };

export default SpinnerComponent;

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from './styles';

interface Iprops {
  size?: number;
  className?: string;
}

const SpinnerComponent = (props: Iprops) => (
  <Container className={props.className}>
    <CircularProgress
      size={props.size || 110}
      thickness={2}
    />
  </Container>
);

export default SpinnerComponent;

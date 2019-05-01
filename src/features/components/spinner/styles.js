import styled from 'styled-components';

const Container = styled.div`
  width: 100%!important;
  height: 100%!important;
  position: absolute!important;
  background: rgba(0, 0, 0, 0.48);
  left: 0;
  top: 0;
  z-index: 2000;
  display: flex!important;
  align-items: center;
  justify-content: center;
  
  svg{
    color: $primary-background-color;
  }
`;

export default Container;

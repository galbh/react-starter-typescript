import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.framePadding};
  overflow: auto;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.primaryBackgroundColor};

  > div {
    padding: ${({ theme }) => theme.spacing.framePadding};
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/OpenSans/OpenSans-Light.ttf') format('truetype');
    font-weight: light;
  }
`;

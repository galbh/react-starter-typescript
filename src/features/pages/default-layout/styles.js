import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.frame_padding};
  overflow: auto;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.primary_background_color};

  > div{
    padding: ${({ theme }) => theme.spacing.frame_padding};
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
`

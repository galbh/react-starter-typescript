import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryBackgroundColor};
  font-size: ${({ theme }) => theme.sizes.fontSizeRegular};
`;

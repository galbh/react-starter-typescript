import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary_background_color};
  font-size: ${({ theme }) => theme.sizes.font_size_regular}
`;

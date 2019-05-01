import styled from 'styled-components';

export default styled.div`
  padding: ${({ theme }) => theme.frame_padding};
  overflow: auto;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.primary_background_color};

  > div{
    padding: ${({ theme }) => theme.spacing.frame_padding};
  }
`;

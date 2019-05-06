import AppBar from '@material-ui/core/AppBar';
import styled, { AnyStyledComponent } from 'styled-components';

export const Header: AnyStyledComponent = styled(AppBar)`  
  
  && {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  line-height: 60px;
  height: 60px!important;  
  box-shadow: none!important;
  height: 64px;
  color: inherit!important;

  > div{
    padding-left: 18px;
    padding-right: 18px;
  }

  > div, svg{
    color: ${({ theme }) => theme.colors.primary_text_color}
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  margin: 0 16px;
`;

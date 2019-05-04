import styled, { AnyStyledComponent } from 'styled-components';
import { Drawer, ExpansionPanel } from '@material-ui/core';

export const StyledDrawer: AnyStyledComponent = styled(Drawer)`
  &&, && li{
    font-size: ${({ theme }) => theme.sizes.font_size_regular};
  }
  
  > div:nth-child(2) {
    width: 120px!important;
    background: ${({ theme }) => theme.colors.primary_dark}    
  }

  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%!important;
  height: 100%;
  
  div, span, svg{
    color: ${({ theme }) => theme.colors.primary_icon_color};
  }

  a.active > li{
    background: ${({ theme }) => theme.colors.primary_selected_text_color};
    font-weight: bold;
  
    &:hover{
      background: ${({ theme }) => theme.colors.primary_selected_text_color};
    }
  
    * {
      color: ${({ theme }) => theme.colors.secondary_background_color};
    }
  }

  .selected span{
    color: ${({ theme }) => theme.colors.primary_background_color};
    font-weight: bold;
  }

  div{
    flex-grow: 0;    
  }

  .logo{
    border-right: none;
    display: flex;
    justify-content: center;
    height: 60px;
    background: ${({ theme }) => theme.colors.primary_dark}
  }

  a{
    text-decoration: none!important;

    li{
      padding: 0;
      text-transform: uppercase;
      height: 100px;
      display: flex;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover{
        background: inherit;
      }
      
      img{
        max-width: 50px;
      }
    }    
  }
`;

export const Logo = styled.div`
  border-right: none;
  display: flex;
  justify-content: center;
  height: 60px;

  > img{
    width: 100%;
  }
`;

export const WrapperRtl = styled(Wrapper)`
  direction: rtl;
  text-align: right;
  justify-content: flex-start;
`;

export const Languages: AnyStyledComponent = styled(ExpansionPanel)`
  font-size: inherit;
  background: inherit;
  margin: 0;
  span{
    font-size: ${({ theme }) => theme.sizes.font_size_regular};
  }
`;

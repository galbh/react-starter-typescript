import styled, { AnyStyledComponent } from 'styled-components';
import MaterialButton from '@material-ui/core/Button';
import MaterialMenu from '@material-ui/core/Menu';
import MaterialAvatar from '@material-ui/core/Avatar';

const dividerPrimaryColor = '#919191';
const primaryTextColor = '#4a4a4a';
const toggleBtnPrimaryColor = '#4b4b4b';
const border = ` 1px solid ${dividerPrimaryColor}`;
const flexDirection = (props: Iprops) => props.direction === 'rtl' && 'row-reverse';

interface Iprops {
  direction: string;
}

export const Button: any = styled(MaterialButton)`
  padding: 0 13px !important;
  border-radius: 1px!important;
  height: 36px;
  width: 173px!important;
  text-transform: capitalize !important;
  font-weight: light;

  &&{
    border-left: ${(props: Iprops) => props.direction === 'ltr' && border};
    border-right: ${(props: Iprops) => props.direction === 'rtl' && border};
  }
  
  &:disabled{
    opacity: 0.5;
  }
  
  &:hover {
    background-color: transparent !important;  
  }
  
  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: ${flexDirection};
    div{
      flex-direction: ${flexDirection};
    }
  } 
`;

export const Menu: AnyStyledComponent = styled(MaterialMenu)`

  div[role=document] {    
    //this is the menu the opened once the user click on the button
    ul[role=menu]{
      width: 173px !important;
      
      li {
        text-transform: capitalize !important;
      }
    }
  }
`;

export const Avatar: AnyStyledComponent = styled(MaterialAvatar)`
      width: 36px !important;
      height: 36px !important;
      background: #fff;
  
      img{
        width: 100%;
      }
`;

export const UserContainer: AnyStyledComponent = styled.div`
      display: flex;
      align-items: center;
      flex-direction: ${flexDirection};
      
      .userName {
        color: ${primaryTextColor};
        font-size: ${({ theme }) => theme.sizes.font_size_regular}
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 92px;
        display: inline-block;
        margin: 0 8px;
      }
      
      .toggleButton{
        color: ${toggleBtnPrimaryColor};
      }
`;

import React, { useState, BaseSyntheticEvent, useContext } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import DefaultAvatar from '@material-ui/icons/Person';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button, Menu, Avatar, UserContainer } from './styles';
import Iuser from '../../../common/state/auth/auth.models';
import { DirectionContext } from '../../../common/contexts';

interface ImenuItem {
  label: string;
  onItemClick: React.EventHandler<any>;
}

interface Iprops {
  open: boolean;
  user: Iuser;
  listOfItems: ImenuItem[];
  anchorEl?: HTMLElement;
}

const UserMenuComponent: React.FC<Iprops> = props => {
  const { user, open, listOfItems } = props;
  const [isOpen, setOpen] = useState(open);
  const [anchorEl, setAnchorEl] = useState(null);
  const direction = useContext(DirectionContext);

  const handleClick = (event: BaseSyntheticEvent<object, any, any>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!isOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const listItems = listOfItems.map((item: ImenuItem, index: number) => (
    <MenuItem key={item.label} onClick={item.onItemClick}>
      {item.label}
    </MenuItem>
  ));

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <React.Fragment>
        <Button
          direction={direction}
          onClick={handleClick}
          className="userMenuComponent"
        >
          <div className="buttonContainer">
            <Avatar src={user.avatar}>
              {!user.avatar && <DefaultAvatar />}
            </Avatar>
            <UserContainer className="userContainer">
              <span className="userName">{`${user.firstName} ${
                user.lastName
              }`}</span>
              {isOpen ? (
                <ArrowDropUp className="arrow-up" />
              ) : (
                <ArrowDropDown className="arrow-down" />
              )}
            </UserContainer>
          </div>
        </Button>

        <Menu
          direction={{ direction }}
          anchorEl={anchorEl}
          open={isOpen}
          disableAutoFocusItem
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {listItems}
        </Menu>
      </React.Fragment>
    </ClickAwayListener>
  );
};

export default UserMenuComponent;

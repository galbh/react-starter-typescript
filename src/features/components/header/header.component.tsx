import React from 'react';
import { useTranslation } from 'react-i18next';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Header, Title } from './styles';
import User from '../../../common/state/auth/auth.models';
import UserMenuComponent from '../user-menu/user-menu.component';

interface Iprops {
  openDrawer: React.EventHandler<React.SyntheticEvent>;
  loggedInUser?: User;
  title: string;
}

const HeaderComponent: React.FC<Iprops> = ({
  openDrawer,
  loggedInUser: user,
  title
}) => {
  const [t] = useTranslation();
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <IconButton onClick={openDrawer} className="hamburger">
            <MenuIcon />
          </IconButton>
          <Title>{t(title)}</Title>
          {user && (
            <UserMenuComponent
              user={user}
              open={false}
              listOfItems={[
                { label: 'test', onItemClick: () => alert('test') }
              ]}
            />
          )}
        </Toolbar>
      </Header>
    </div>
  );
};

export default HeaderComponent;

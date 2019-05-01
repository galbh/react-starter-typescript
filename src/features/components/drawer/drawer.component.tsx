import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  MenuItem,
  ExpansionPanel,
  ListItemText,
  ListItem,
  List,
  ExpansionPanelSummary
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import {
  StyledDrawer,
  WrapperRtl,
  Wrapper,
  Logo
} from './styles';

interface Iprops {
  closeDrawer: React.EventHandler<any>,
  open: boolean,
  languages: any,
  language: any,
  onChangeLanguage: React.EventHandler<any>,
  isRtl: boolean
}

const DrawerComponent: React.FC<Iprops> = ({
  closeDrawer,
  open,
  languages,
  language,
  onChangeLanguage,
  isRtl
}) => {
  const [t] = useTranslation();
  const Container = isRtl ? WrapperRtl : Wrapper;
  return (
    <StyledDrawer
      open={open}
      variant="temporary"
      anchor={isRtl ? 'right' : 'left'}
      onClose={closeDrawer}
    >
      <Container>

        <Logo>logo</Logo>

        <DrawerLink
          to={ROUTES.home}
          icon={<HomeIcon />}
          label={t('HOME_PAGE')}
          closeDrawer={closeDrawer}
        />

        <DrawerLink
          to={ROUTES.about}
          icon={<DashboardIcon />}
          label={t('ABOUT_PAGE')}
          closeDrawer={closeDrawer}
        />

        {/* Language Switcher */}
        <ExpansionPanel style={{ margin: 0, background: 'inherit' }}>
          <ExpansionPanelSummary>{t('LANGUAGES')}</ExpansionPanelSummary>
          <List>
            {
              Object.keys(languages).map((l: string) => (
                <ListItem
                  key={l}
                  button
                  className={language === languages[l] ? 'selected' : ''}
                  onClick={() => onChangeLanguage(languages[l])}
                >
                  <ListItemText primary={l} />
                </ListItem>
              ))
            }
          </List>
        </ExpansionPanel>

      </Container>
    </StyledDrawer>
  );
};

interface IdrawerLinkProps {
  closeDrawer: React.EventHandler<any>,
  iconSrc?: string,
  label: string,
  to: string,
  icon?: React.ReactElement
}

const DrawerLink: React.FC<IdrawerLinkProps> = ({
  closeDrawer, iconSrc, label, to, icon
}) => (
    <NavLink
      activeClassName="active"
      to={to}
    >
      <MenuItem onClick={closeDrawer}>
        {icon}
        {!icon && iconSrc && <img src={iconSrc} alt={`${label} link`} />}
        <span>{label}</span>
      </MenuItem>
    </NavLink>
  );


export default DrawerComponent;

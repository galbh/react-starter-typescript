import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  MenuItem,
  ListItemText,
  ListItem,
  List,
  ExpansionPanelSummary
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import { StyledDrawer, WrapperRtl, Wrapper, Logo, Languages } from './styles';
import { StringMap } from '../../../common/models';

interface DrawerProps {
  closeDrawer: React.EventHandler<React.SyntheticEvent>;
  open: boolean;
  languages: StringMap;
  language: string;
  onChangeLanguage: (args0: string) => void;
  isRtl: boolean;
}

const DrawerComponent: React.FC<DrawerProps> = ({
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
        <Logo>
          <img src="https://dummyimage.com/200x120/000/fff" alt="logo" />
        </Logo>

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
        <Languages style={{ margin: 0, background: 'inherit' }}>
          <ExpansionPanelSummary>{t('LANGUAGES')}</ExpansionPanelSummary>
          <List>
            {Object.keys(languages).map((l: string) => (
              <ListItem
                key={l}
                button
                className={language === languages[l] ? 'selected' : ''}
                onClick={() => onChangeLanguage(languages[l])}
              >
                <ListItemText primary={l} />
              </ListItem>
            ))}
          </List>
        </Languages>
      </Container>
    </StyledDrawer>
  );
};

interface DrawerLinkProps {
  closeDrawer: React.EventHandler<React.SyntheticEvent>;
  iconSrc?: string;
  label: string;
  to: string;
  icon?: React.ReactElement;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({
  closeDrawer,
  iconSrc,
  label,
  to,
  icon
}) => (
  <NavLink activeClassName="active" to={to}>
    <MenuItem onClick={closeDrawer}>
      {icon}
      {!icon && iconSrc && <img src={iconSrc} alt={`${label} link`} />}
      <span>{label}</span>
    </MenuItem>
  </NavLink>
);

export default DrawerComponent;

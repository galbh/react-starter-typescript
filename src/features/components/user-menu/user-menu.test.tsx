import React from 'react';
import { mount } from 'enzyme';
import UserMenuComponent from './user-menu.component';
import TestUtils from '../../../utils/test-utils';

describe('UserMenuComponent', () => {
  let wrapper: any;
  const onClick = jasmine.createSpy('onClick');
  const menuItems = [
    {
      label: 'Settings',
      onItemClick: onClick
    },
    {
      label: 'Logout',
      onItemClick: onClick
    }
  ];

  const component = (
    <UserMenuComponent
      user={{
        email: 'guy@dsmadmas',
        firstName: 'Guy',
        lastName: 'Engel',
        id: 'userId'
      }}
      open={false}
      listOfItems={menuItems}
    />
  );

  const utils = new TestUtils(component);

  beforeEach(() => {
    wrapper = mount(utils.getWrapper());
  });

  it('check default props', () => {
    expect(wrapper.props().open).toBeFalsy();
  });

  it('check if toggle sign is correct state when close', () => {
    const button = wrapper.find('.userMenuComponent').first();
    const toggle = button.find('.userContainer svg').first();
    // initial state, drop down is close
    expect(toggle.hasClass('arrow-down')).toBeTruthy();
  });

  it('check if callback is being called', () => {
    const button = wrapper.find('.userMenuComponent').first();
    button.simulate('click');

    // click on second option
    const secondOption = wrapper
      .find("[role='document'] [role='menu'] li")
      .at(1);
    secondOption.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

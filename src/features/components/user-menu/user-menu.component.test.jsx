import React from 'react';
import { mount } from 'enzyme';
import GeneralUtils from '../../common/utils.js';
import UserMenuComponent from './user-menu.component.jsx';

describe('UserMenuComponent', () => {
  let wrapper;
  const onClick = jasmine.createSpy('onClick');
  const menuItems = [{
    label: 'Settings',
    onItemClick: onClick
  }, {
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
        userId: 'userId'
      }}
      open={false}
      listOfItems={menuItems}
    />

  );

  beforeAll(() => GeneralUtils.renderIntoDocument(component));

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('check default props', () => {
    expect(wrapper.props().open).toBeFalsy();
  });

  it('check if toggle sign is correct state when close', () => {
    const button = wrapper.find('.userMenuComponent').first();
    const toggle = button.find('.userContainer svg').first();
    // initial state, drop down is close
    expect(toggle.instance()).toHaveClass('arrow-down');
  });

  it('check if callback is being called', () => {
    const button = wrapper.find('.userMenuComponent').first();
    button.simulate('click');

    // click on second option
    const secondOption = wrapper.find('[role=\'document\'] [role=\'menu\'] li').at(1);
    secondOption.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

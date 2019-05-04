example:

```jsx inside Markdown
const menuItems = [
    {
        label: 'Settings',
        onItemClick: () => {alert('Settings option has being clicked')}
    }, 
    {
        label: 'Logout',
        onItemClick: () => {alert('Logout option has being clicked')}
    }
  ];

<UserMenuComponent
    user={
        {
            email: 'guy@dsmadmas',
            firstName: 'Guy',
            lastName: 'Engel',
            userId: 'userId'
        }
    }
    open={false}
    listOfItems={menuItems}
/>
```

// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primaryBackgroundColor: '#f8f9fd',
    secondaryBackgroundColor: '#ce1026',
    primaryTextColor: '#444444',
    secondaryTextColor: '#888888',
    primarySelectedTextColor: '#fff',
    primaryIconColor: '#cccccc',
    primaryDark: '#40414b',
    primaryLight: '#fff'
  },

  spacing: {
    framePadding: '32px'
  },

  sizes: {
    fontSizeRegular: '12px'
  }
};

export { myTheme };

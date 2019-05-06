import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primaryBackgroundColor: string;
      secondaryBackgroundColor: string;
      primaryTextColor: string;
      secondaryTextColor: string;
      primarySelectedTextColor: string;
      primaryIconColor: string;
      primaryDark: string;
      primaryLight: string;
    };

    spacing: {
      framePadding: string;
    };

    sizes: {
      fontSizeRegular: string;
    };
  }
}

// my-theme.ts
import { DefaultTheme } from 'styled-components'

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary_background_color: '#f8f9fd',
    secondary_background_color: '#ce1026',
    primary_text_color: '#444444',
    secondary_text_color: '#888888',
    primary_selected_text_color: '#fff',
    primary_icon_color: '#cccccc',
    primary_dark: '#40414b',
    primary_light: '#fff'    
  },

  spacing: {
    frame_padding: '32px'
  }
}

export { myTheme }

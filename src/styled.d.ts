import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary_background_color: string,
      secondary_background_color: string,
      primary_text_color: string,
      secondary_text_color: string,
      primary_selected_text_color: string,
      primary_icon_color: string,
      primary_dark: string,
      primary_light: string
    },

    spacing: {
      frame_padding: string
    }
  }
}

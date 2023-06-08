const colors = {
  alpha: "#355FA3",
  beta: "#F4F7FF",
  success: "#4ECE00",
  danger: "#EA4335",
  black: "#000000",
  darkGrey: "#5F5F5F",
  lightGrey: "#868686",
  placeHolder: "#CACACA",
  extraLightGrey: "#E9E9E9",
  white: "#FFFFFF",
  ghostWhite: "#F9F9F9",
  milk: "#F7FFF4",
  ultraMarineBlue: "#3768ED",
  antiFlashWhite: "#F2F3F7",
  steelTeal: "#588491",
  brightGray: "#E8F3F6",
  cream: "#FFFFD0",
  darkPastelBlue: "#809AC7",
};

const fonts = {
  poppins: `'Poppins', sans-serif`,
};

export const theme = {
  colors,
  fonts,
};

declare module "styled-components" {
  type theme = typeof theme;
  export interface DefaultTheme extends theme {}
  export type DefaultColors = typeof colors;
  export type DefaultFonts = typeof fonts;
}

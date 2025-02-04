export const colors = {
  white: {
    100: '#FEFEFE',
    200: '#F8FAFC',
    300: '#EFEFEF',
  },
  black: {
    100: '#191919',
  },
  blue: {
    100: '#C2D4E5',
    200: '#D4E1ED',
    300: '#E6EDF4',
    400: '#F8FAFC',
  },

  // BLACK: '#191919',
  // WHITE: '#FEFEFE',
  // BACKGROUND: '#F8FAFC',
  // OUTSIDE: '#efefef',
};

export const weights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const theme = {
  colors,
  weights,
};

export type Colors = keyof typeof colors;
export type Weights = keyof typeof weights;

export const colorNames = Object.keys(colors) as Colors[];

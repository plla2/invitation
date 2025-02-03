export const colors = {
  BLACK: '#191919',
  WHITE: '#FEFEFE',
  BACKGROUND: '#F8FAFC',
  OUTSIDE: '#F6F4F0',
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

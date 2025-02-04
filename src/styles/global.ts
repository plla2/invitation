export const colors = {
  white: {
    100: '#FEFEFE',
    200: '#F8FAFC',
    300: '#EFEFEF',
  },
  black: {
    100: '#191919',
  },

  // BLACK: '#191919',
  // WHITE: '#FEFEFE',
  // BACKGROUND: '#F8FAFC',
  // OUTSIDE: '#efefef',
};

export const theme = {
  colors,
};

export type Colors = keyof typeof colors;

export const colorNames = Object.keys(colors) as Colors[];

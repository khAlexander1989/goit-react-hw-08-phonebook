export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(size => `${size}px`),

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96].map(size => `${size}px`),

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  colors: {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F6F8FF',
    accent: '#4184FF',
    textPrimary: '#384141',
    textSecondary: '#122236',
    textWhite: '#FFFFFF',
    textBlack: '#000000',
    error: '#FF0000',

    red: '#E54D62',
    green: '#53AD54',
    blue: '#3274F0',
    orange: '#f32d0f',
    seaGreen: '#3f7976',

    borderPrimary: '#DFDFDF',
    borderLightGrey: '#999999',
    borderWhite: '#FFFFFF',
    borderPaleBlue: '#EFEFEF',

    btnDisabled: '#B2CDFF',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },

  borders: {
    default: '1px solid',
  },
};

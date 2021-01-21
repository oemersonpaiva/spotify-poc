export default {
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      '2xxlarge': '3.2rem'
    }
  },
  colors: {
    primary: '#ea1d2c',
    secondary: '',
    white: {
      100: '#ffffff',
      200: '#fafafa',
      300: '#f0f4f7'
    },
    black: {
      100: '#030303',
      200: '#050606'
    }
  },
  spacings: {
    '2xxsmall': '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  sizes: {
    navbar: '7rem'
  }
} as const

const colors = {
  primary: '#131618',
  black: '#000',
  white: '#fff',
  accent: '#00e575',
  // dark: '#000a12',
  divider: '#1B1D1E',
  light: '#232527',
  charcoal: '#666',
  yellow: '#FFDB00',
  teal: '#017991',
}

const spacing = [4, 8, 16, 24, 32]

const grid = {
  gap: 8,
}

const theme = {
  colors,
  spacing,
  grid,
}

export type Theme = typeof theme

export default theme

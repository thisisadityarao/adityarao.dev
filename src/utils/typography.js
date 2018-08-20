import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  includeNormalize: false,
  scaleRatio: 3,
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Asap',
      styles: ['600', '700'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '400i', '600', '600i', '700', '700i'],
    },
  ],
  headerFontFamily: [
    'Asap',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
});

export default typography;

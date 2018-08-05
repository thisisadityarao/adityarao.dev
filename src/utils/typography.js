import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Asap",
      styles: ["400", "400i", "500", "500i", "700", "700i"]
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Merriweather", "serif"],
  bodyFontFamily: ["Asap", "sans-serif"]
});

export default typography;

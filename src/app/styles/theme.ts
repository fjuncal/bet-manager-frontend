const theme = {
  colors: {
    primary: "#1da1f2",
    secondary: "#ff7f50",
    background: "#f0f2f5",
    text: "#333",
  },
  spacing: (factor: number) => `${8 * factor}px`,
};

export default theme;
export type ThemeType = typeof theme;

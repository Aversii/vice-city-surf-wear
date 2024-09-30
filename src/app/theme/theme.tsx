import { ITheme } from "./iTheme";

export const darkTheme: ITheme = {
  colors: {
    primary: "#D147A3",
    background: "#1A2238",
    text: "#EAEAEA",
    subText: "#A9A9A9",
    accent: "#00A0C6",
    secondary: "#C71585",
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #D5006D, #FF3C00)",     
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
    monospace: "'Courier New', monospace",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borders: {
    radius: "8px",
    width: "1px",
    color: "#333333",
  },
  shadows: {
    small: "0px 1px 3px rgba(0, 0, 0, 0.5)",
    medium: "0px 4px 6px rgba(0, 0, 0, 0.5)",
    large: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1200px",
  },
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  },
};

export const lightTheme: ITheme = {
  colors: {
    primary: "#FF6EC7",
    background: "#FF8C00",
    text: "#333333",
    subText: "#666666",
    accent: "#7DF9FF",
    secondary: "#FFA07A",
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #4D4D4D, #1A1A1A)",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
    monospace: "'Courier New', monospace",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borders: {
    radius: "8px",
    width: "1px",
    color: "#CCCCCC",
  },
  shadows: {
    small: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1200px",
  },
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  },
};

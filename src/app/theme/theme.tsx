import { ITheme } from "./iTheme";

export const darkTheme: ITheme = {
  colors: {
    primary: "#012C4C", // Azul forte presente no border-top do footer
    background: "#1b1b1b", // Fundo escuro do footer
    text: "#fff", // Texto branco do footer
    subText: "#ffcc00", // Subtexto amarelo usado nos títulos dos links
    accent: "#ffcc00", // Mesma cor usada no hover dos links
    secondary: "#D147A3", // Mantido o secundário original
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #012C4C, #00455E, #006571, #008486, #002C3C)",
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
    width: "2px", // Para combinar com o border-top do footer
    color: "#007bff", // Azul do footer
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
    primary: "#cfe4e6",
    background: "#FF8C00",
    text: "#333333",
    subText: "#666666",
    accent: "#7DF9FF",
    secondary: "#FFA07A",
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #2847d3, #3e6ee3, #66a1e8, #bbe3be)"
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

export interface ITheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      subText:string;
      accent: string;
      secondary: string;
      error?: string;
      success?: string;
      warning?:string;
      gradient?:string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace?: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borders?: {
      radius: string;
      width: string;
      color: string;
    };
    shadows?: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints?: {
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop?: string;
    };
    typography?: {
      h1: {
        fontSize: string;
        fontWeight: string;
      };
      h2: {
        fontSize: string;
        fontWeight: string;
      };
      p: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
  
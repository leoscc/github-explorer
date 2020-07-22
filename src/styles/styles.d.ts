import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;

      icon: string;
      title: string;
      subtitle: string;
      description: string;

      cardTitle: string;
      cardBackground: string;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        dark: {
            textColor: string;
            bgColor: string;
        };
        light: {
            bgColor: string;
        };
    }
}

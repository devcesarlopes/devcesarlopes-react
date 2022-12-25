import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            third: string;
            primary_hover: string;
            background_primary: string;
            background_secondary: string;
            background_third: string;
            background_gradient: string;
            icon_filter: string;
            icon_filter_secondary: string;
            font_main_color: string;
            font_primary: string;
            font_secondary: string;
            font_third: string;
        };
    }
}

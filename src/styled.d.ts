import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    txtColor: string;
    btnColor: string;
    btnTxtColor: string;
    primary: string;
    secondary: string;
  }
}

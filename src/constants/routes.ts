import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export const routes: {
  href: string;
  display: string;
  iconName: SemanticICONS;
}[] = [
  {
    href: "/",
    display: "Home",
    iconName: "home",
  },
  {
    href: "/dashboard",
    display: "Dashboard",
    iconName: "user circle",
  },
];

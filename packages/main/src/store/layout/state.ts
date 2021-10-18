import { MenuOption } from "@vpba/customer-interface";
import {} from "vuex";

export interface LayoutState {
  menuOptions: MenuOption[];
  theme: {
    primaryColor: string;
    accenteColor: string;
    secondaryColor: string;
  };
}

export const layoutState: LayoutState = {
  menuOptions: [{ title: "Home", route: "/" }],
  theme: {
    accenteColor: "",
    primaryColor: "",
    secondaryColor: "",
  },
};

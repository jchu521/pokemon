import { rootReducer } from "../redux/reducers/rootReducer";

export const rootState = rootReducer(undefined, { type: undefined });

export const initialState = {
  ...rootState,
  other: {
    openSideBar: true,
    menuItems: [
      { name: "Pokedex.org" },
      { name: "Pokémon", href: "" },
      { name: "About", href: "" }
    ],
    pages: [{ title: "Pokedex.org" }]
  }
};

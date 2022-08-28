import React, {createContext} from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourete: (id) => {},
  removeFavourete: (id) => {},
});

function FavouritesContextProvider({children}) {
  return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;

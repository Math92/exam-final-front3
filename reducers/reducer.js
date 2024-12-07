export const initialState = {
    theme: "light",
    data: [],
    favs: JSON.parse(localStorage.getItem("favs")) || []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === "light" ? "dark" : "light" }
      case 'GET_DENTISTS':
        return { ...state, data: action.payload }
      case 'ADD_FAV':
        // eslint-disable-next-line no-case-declarations
        const newFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(newFavs));
        return { ...state, favs: newFavs }
      case 'REMOVE_FAV':
        // eslint-disable-next-line no-case-declarations
        const updatedFavs = state.favs.filter(fav => fav.id !== action.payload);
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs }
      default:
        return state;
    }
  };
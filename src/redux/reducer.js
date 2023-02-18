const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_FAVORITES":
      const addFav = [...state.allCharacters, action.favorite];
      return {
        ...state,
        allCharacters: [...addFav],
        myFavorites: [...addFav],
      };
    case "DELETE_FAVORITES":
      const deleteFav = state.myFavorites.filter(
        (favorite) => favorite.id !== action.id
      );
      return {
        ...state,
        myFavorites: [...deleteFav],
        allCharacters: [...deleteFav],
      };
    case "VACIAR_ARRAY":
      return {
        ...state,
        myFavorites: [],
      };
    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case "ORDER":
      const sortedCharacters = [...state.allCharacters].sort((a, b) => {
        if (action.payload === "Descendente") {
          return a.id - b.id;
        } else if (action.payload === "Ascendente") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
        allCharacters: state.allCharacters,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

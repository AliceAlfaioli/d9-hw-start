const initialState = {
  list: [],
};

//aggiornare il reucers
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,

        list: [...state.list.concat(action.payload)],
      };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,

        list: state.list.filter((fav) => fav !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;

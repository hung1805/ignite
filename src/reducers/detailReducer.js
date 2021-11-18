const intialState = {
  gameDetail: {
    platforms: [],
  },
  screenshots: {
    results: [],
  },
  isLoading: true,
};

const detailReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
export default detailReducer;

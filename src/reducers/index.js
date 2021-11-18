import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const reducer = combineReducers({
  games: gamesReducer,
  game: detailReducer,
});

export default reducer;

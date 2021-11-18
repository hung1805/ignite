import axios from "axios";
import { gameDetailURL, gameDetailScreenshotsURL } from "../api";

export const fetchGameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
    isLoading: true,
  });
  const detail = await axios.get(gameDetailURL(id));
  const screenshots = await axios.get(gameDetailScreenshotsURL(id));
  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      gameDetail: detail.data,
      screenshots: screenshots.data,
    },
  });
};

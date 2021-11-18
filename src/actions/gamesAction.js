import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchGamesURL } from '../api';

export const fetchGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL);
  const upcomingData = await axios.get(upcomingGamesURL);
  const newGamesData = await axios.get(newGamesURL);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcomingGames: upcomingData.data.results,
    },
  });
};

export const fetchSearched = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchGamesURL(game_name));
  dispatch({
    type: 'FETCH_SEARCHED_GAME',
    payload: { searched: searchedGames.data.results },
  });
};

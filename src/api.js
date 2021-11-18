//Base URL
const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGamesURL = `${base_url}games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const upcomingGamesURL = `${base_url}games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const newGamesURL = `${base_url}games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const gameDetailURL = (id) =>
  `${base_url}games/${id}?key=${process.env.REACT_APP_API_KEY}`;

export const gameDetailScreenshotsURL = (id) =>
  `${base_url}games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

export const searchGamesURL = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}`;

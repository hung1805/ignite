import React, { useEffect } from 'react';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../actions/gamesAction';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion/dist/framer-motion';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { popularGames, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  key={game.id}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </>
        ) : null}
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

//Styled Components
const GameList = styled(motion.div)`
  padding: 0 10rem;
  h2 {
    padding: 5rem 0;
  }
  @media (max-width: 500px) {
    padding: 0 3px;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 5rem 5rem;
`;
export default Home;

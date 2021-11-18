import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGameDetail } from '../actions/detailAction';
import { smallImage } from '../util';

import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const Game = ({ id, image, name, released }) => {
  const dispatch = useDispatch();
  const fetchDetailHandler = () => {
    dispatch(fetchGameDetail(id));
    document.body.style.overflow = 'hidden';
  };
  return (
    <StyledGame onClick={fetchDetailHandler} layoutId={id}>
      <Link to={`/games/${id}`}>
        <motion.img
          src={smallImage(image, 640)}
          alt={name}
          layoutId={`image ${id.toString()}`}
        />
        <h3>{name}</h3>
        <p>{released}</p>
      </Link>
    </StyledGame>
  );
};

//Styled Components
const StyledGame = styled(motion.div)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
  overflow: hidden;
  h3,
  p {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;

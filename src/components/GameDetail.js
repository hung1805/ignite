import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { smallImage } from '../../util';

import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import apple from '../img/apple.svg';
import xbox from '../img/xbox.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const getPlatform = (platform) => {
  switch (platform) {
    case 'Playstation 4':
      return playstation;
    case 'Xbox One':
      return xbox;
    case 'PC':
      return steam;
    case 'Nintendo Switch':
      return nintendo;
    case 'iOS':
      return apple;
    default:
      return gamepad;
  }
};
const getStar = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<img src={starFull} alt="star-full" key={i} />);
    } else {
      stars.push(<img src={starEmpty} alt="star-full" key={i} />);
    }
  }
  return stars;
};
const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const { screenshots, gameDetail, isLoading } = useSelector((state) => state.game);

  //Event Handler
  const handleExitDetail = (e) => {
    if (e.target.classList.contains('card-shadow')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow onClick={handleExitDetail} className="card-shadow">
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{gameDetail.name}</h3>
                <p>Rating: {gameDetail.rating}</p>
                {getStar(gameDetail.rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetail?.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      alt=""
                      key={data.platform.id}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(gameDetail.background_image, 1280)}
                alt={gameDetail.slug}
              />
            </Media>
            <Description>
              <p>{gameDetail.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((screen) => (
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={smallImage(screen.image, 1280)}
                  alt="game screenshot"
                  key={screen.id}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

//Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  z-index: 10;
`;
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 1.5rem 0;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  h3 {
    margin: 1.5rem 0;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    cursor: pointer;
    margin-left: 1.5rem;
    max-width: 30px;
  }
`;
const Media = styled(motion.div)`
  margin-top: 7rem;
`;
const Description = styled(motion.div)`
  margin: 5rem 0;
`;
const Gallery = styled(motion.div)`
  img {
    margin: 0.5rem 0;
  }
`;
export default GameDetail;

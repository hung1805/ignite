import React, { useState } from 'react';

import logo from '../img/logo.svg';
import { fetchSearched } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const Nav = () => {
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState('');

  //Event Handler
  const handleInputChange = (e) => {
    setSearchedText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(searchedText));
    setSearchedText('');
  };

  const clearSearched = () => {
    dispatch({
      type: 'CLEAR_SEARCHED',
    });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <div className="logo-image">
          <img src={logo} alt="logo" />
        </div>
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input
          type="text"
          value={searchedText}
          placeholder="Enter Something"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSearchSubmit}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

//Styled Components

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem;
  text-align: center;
  input[type='text'] {
    width: 30%;
    font-size: 2rem;
    padding: 0.7rem;
    margin-right: 0.5rem;
    border: 2px solid #000;
    border-radius: 0.5rem;
    outline: none;
    &::placeholder {
      font-size: 1.2rem;
      color: #ccc;
    }
  }
  button {
    font-size: 2rem;
    font-weight: 600;
    padding: 0.7rem 1rem;
    border: 2px solid #ff5151;
    border-radius: 0.5rem;
    color: #000;
    background-color: transparent;
    &:hover {
      cursor: pointer;
      border-color: #000;
      background-color: #ff5151;
      color: #000;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .logo-img {
    width: 3rem;
  }
`;
export default Nav;

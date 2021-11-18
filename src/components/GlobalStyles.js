import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
      *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }
      html {
            font-size: 62.5%;
            font-family: 'Poppins', sans-serif;
            &::-webkit-scrollbar{
                  width: .7rem;
            }
            &::-webkit-scrollbar-track {
            background-color: rgba(0,0,0,.1);
            }
            &::-webkit-scrollbar-thumb {
                  background: #555;
                  border-radius: 1rem;
            }
      }
      h1 {
            font-size: 3.2rem;
      }
      h2 {
            font-size: 3rem;
            color: #ff5151;
            font-family: "Abril Fatface", cursive;

      }
      h3 {
            font-size: 1.8rem;
            font-weight: 500;
            color: #000;
      }
      h4 {
            font-size: 1.5rem;
            font-weight: 400;
      }
      p {
            font-size: 1.5rem;
            font-weight: 400;
            color: #555;
      }
      a {
            text-decoration: none;
      }
      img {
            width: 100%;
            display: block;
            object-fit: cover;
      }
`;

export default GlobalStyles;

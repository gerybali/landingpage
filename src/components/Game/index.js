import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const GameContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.homeBackground};
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow: hidden;
  margin-top: 115px;
  
`;
const GameTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  font-size: 2em;
  border-radius: 10px;
  padding: 4px;
  font-weight: bold;

`;
// background-color: ${colors.contactBackground};
// color: ${colors.contactTitle};
const Quote = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 1.3em;
  align-items: flex-start;
  font-weight: bold;
  color: ${colors.navbarBackground};
  font-style: italic;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  margin-top: 30px;
`;

const HandsImage = styled.img`
  width: ${props => props.small ? '500px' : '750px'};

  `;
const Name = styled.span`
  color: #6610f2;
  display: inline-block;
  margin-left: 4px;
`;
const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > img {
    width: 150px;
  }
`;

const ComingSoon = styled.div`
  padding: 4px;
  width: 100px;
  background-color: #6610f2;
  color: #FFF;
  border-radius: 4px;
  transform: rotate(45deg);
  position: absolute;
  top: 27px;
  right: -10px;
`;

const Game = ({ name, title, quote, pic, googleSrc, iosSrc, comingSoon, cssClass }) => {
  return (
    <GameContainer>
      <GameTitle>{title}<Name>{name}</Name></GameTitle>
      <Quote>{quote}</Quote>
      <ImageContainer>
        {comingSoon && (<ComingSoon>Coming soon</ComingSoon>)}
        <HandsImage src={pic} alt="game picture" small={cssClass} />
      </ImageContainer>


      <DownloadButtons>
        {googleSrc && (<img src={googleSrc} alt="google" />)}
        {iosSrc && (<img src={iosSrc} alt="ios" />)}
      </DownloadButtons>

    </GameContainer>
  )
}

export default Game;
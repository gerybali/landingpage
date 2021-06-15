import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';
import hands from '../../images/hands.jpeg';
import google from '../../images/google.webp';
import ios from '../../images/ios.webp';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${colors.homeBackground};
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  overflow: hidden;
  
`;

const Quote = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 4em;
  align-items: center;
  font-weight: bold;
  color: ${colors.homeTitle};
  margin-top: 80px;
`;

const Hands = styled.div`
  flex-grow: 1;
  position: relative;
`;

const HandsImage = styled.img`
  width: 1200px;
`;

const DownloadButtons = styled.div`
  position: absolute;
  bottom: 100px;
  display: flex;
  justify-content: center;
  width: 100%;

  & > img {
    width: 150px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Quote>
        <div>The space, the robots...</div>
        <div>Are you ready?</div>
      </Quote>
      <Hands>
      <HandsImage src={hands} alt="hands" />
      <DownloadButtons>
        <img src={google} alt="google" />
        <img src={ios} alt="ios" />
      </DownloadButtons>
      </Hands>
      
      
    </HomeContainer>
  )
}

export default Home;
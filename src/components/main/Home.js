import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';
import hands from '../../images/Qu.png';
import google from '../../images/google.webp';
import ios from '../../images/ios.webp';
import tv from '../../images/tv_1.png';

const HomeContainer = styled.div`
  width: 100vw;
  height: 160vh;
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
  font-size: 3em;
  align-items: center;
  font-weight: bold;
  color: ${colors.homeTitle};
  margin-top: 85px;
`;

const Hands = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
`;

const HandsImage = styled.img`
  width: 750px;
`;

const DownloadButtons = styled.div`
  position: absolute;
  bottom: 140px;
  display: flex;
  justify-content: center;
  width: 100%;

  & > img {
    width: 150px;
  }
`;

//new entry

const NewTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  margin-left: 45px;
`;

const TvImage = styled.img`
  width: 500px;
`;

const NewProject = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-left: -145px;
  font-family: Segoe Print;
  margin-bottom: 100px;
`;


const Home = () => {
  return (
    <HomeContainer id="section-main">
      <Quote>
        <div>The lab, the drones!</div>
        <div>Let's billiard!?</div>
      </Quote>
      <Hands>
      <HandsImage src={hands} alt="hands" />
      
      <NewTitle>Q-Drone  (coming soon)</NewTitle>

      <DownloadButtons>
        <img src={google} alt="google" />
        <img src={ios} alt="ios" />
      </DownloadButtons>
      
      </Hands>

      <TvImage src={tv} alt="hands" />
      <NewProject>Working on something new...</NewProject>
      
    </HomeContainer>
  )
}

export default Home;
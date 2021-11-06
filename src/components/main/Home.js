import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import hands from '../../images/orbs.png';
import google from '../../images/google.webp';
import ios from '../../images/ios.webp';
import tv from '../../images/tv_1.png';
import Game from '../Game';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  background-color: ${colors.homeBackground};
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  overflow: hidden;
  margin-bottom: 100px;
  
`;

const Home = () => {
  return (
    <HomeContainer id="section-main">
      <Game
        title="Be ready to play"
        name="Orbs"
        googleSrc={google}
        iosSrc={ios}
        quote="You have the lab, the drones... Let's play billiard!"
        pic={hands}
        comingSoon={true}
      />
      <Game
        pic={tv}
        name="New..."
        title="Working on something"
        cssClass="retro"
      />

    </HomeContainer>
  )
}

export default Home;
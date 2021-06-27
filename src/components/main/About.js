import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';

const HomeContainer = styled.div`
  width: 100vw;
  height: calc(100vh + 10px);
  box-sizing: border-box;
  background-color: ${colors.aboutBackground};
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
  
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
  color: ${colors.aboutTitle};
  margin-top: 80px;
`;


const About = () => {
  return (
    <HomeContainer id="section-about">
      <Quote>
        <div>About us, the true story</div>
      </Quote>
      
      
      
    </HomeContainer>
  )
}

export default About;
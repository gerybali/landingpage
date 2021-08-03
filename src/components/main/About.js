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
  font-size: 2.5em;
  align-items: center;
  font-weight: bold;
  color: ${colors.mailTitle};
  margin-top: 80px;
`;

const AboutBox = styled.div`
  width: 90vw;
  padding: 40px 10px;
  max-width: 720px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 24px;
`;

const Text = styled.p`
  color: ${colors.mailTitle};
`;

const About = () => {
  return (
    <HomeContainer id="section-about">
      <Quote>
        <div>About us, the true story</div>
      </Quote>
      
      <AboutBox>
        <Text>
        At Pafcol Studio we make games. Our passion is to find new ideas and experiences.  
        We take inspiration and experiment on topics that aren't always game related.
        
        </Text>
      </AboutBox>
      
    </HomeContainer>
  )
}

export default About;
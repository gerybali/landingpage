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

const AboutBox = styled.div`
  width: 90vw;
  padding: 40px 10px;
  max-width: 720px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 24px;
`;

const Text = styled.p`
  color: ${colors.aboutTitle};
`;
const About = () => {
  return (
    <HomeContainer id="section-about">
      <Quote>
        <div>About us, the true story</div>
      </Quote>
      
      <AboutBox>
        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </AboutBox>
      
    </HomeContainer>
  )
}

export default About;
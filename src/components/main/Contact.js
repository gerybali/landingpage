import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';
import contactus from '../../images/contactus-white.png';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 400px;
  box-sizing: border-box;
  background-color: ${colors.contactBackground};
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
  color: ${colors.contactTitle};
  margin-top: 80px;
`;

const Box = styled.div`
  color: #FFF;
  width: 560px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url(${contactus}) no-repeat;
  height: 280px;
`;

const ContactMessage = styled.div`
  color: #FFF;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  & a {
    cursor: pointer;
    color: ${colors.aboutTitle};
    text-decoration: none;
    display: inline-block;
    margin-lefT: 8px;
  }
`;

const Contact = () => {
  return (
    <HomeContainer id="section-contactus">
      <Quote>
        <div>Want to know more?</div>
      </Quote>
      
      <Box>
        <ContactMessage>Send an email to <a href="mailto:gerybalint@gmail.com">gerybalint@gmail.com</a></ContactMessage>
      </Box>
      
    </HomeContainer>
  )
}

export default Contact;
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import contactus from '../../images/contactus-white.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const HomeContainer = styled.div`
  background: url(${contactus}) no-repeat center 222px;
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
  font-size: 2em;
  align-items: center;
  font-weight: bold;
  color: ${colors.contactTitle};
  margin-top: 95px;
`;

const Box = styled.div`
  color: #FFF;
  width: 800px;
  display: flex;
  justify-content: center;
  position: relative;
  flex-grow: 1;
`;

const ContactMessage = styled.div`
  color: #FFF;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-top: 238px;
  & a {
    cursor: pointer;
    color: ${colors.aboutTitle};
    text-decoration: none;
    display: inline-block;
    margin-lefT: 8px;
  }
`;

//my extent

const Wrapper = styled.section`
  
  height: 51px;
  width: 100vw;
  text-align: center;
  border-top: 2px solid ${colors.aboutTitle};
  color: ${colors.comingSoonBG};
  a {
    color: ${colors.comingSoonBG};
    margin-left: 8px;
    display: inline-block;
  }
  padding: 4px;
     
`;


const Contact = () => {
  return (
    <HomeContainer id="section-contactus">
      <Quote>
        <div>Want to know more?</div>
      </Quote>

      <Box>
        <ContactMessage>Send an email to <a href="mailto:pafcolstudio@gmail.com">pafcolstudio@gmail.com</a></ContactMessage>

      </Box>

      <Wrapper>
        <a href="https://www.instagram.com/pafcolstudio" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://www.twitter.com/pafcolstudio" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </Wrapper>

    </HomeContainer>
  )
}

export default Contact;

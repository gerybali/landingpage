import React from 'react';
import styled from 'styled-components';
import {colors} from '../../styles/colors';

const HomeContainer = styled.div`
  width: 100vw;
  height: 50vh;
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


const Contact = () => {
  return (
    <HomeContainer>
      <Quote>
        <div>Want to know more about us?</div>
      </Quote>
      
      
      
    </HomeContainer>
  )
}

export default Contact;
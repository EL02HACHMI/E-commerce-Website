import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
opacity: 70%;
  color: #333333;
  padding: 20px;
  text-align: center;
  position: relative;
  letter-spacing: 2px;

  top: 10vh;
  span{
    font-family: "Great Vibes";
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p><span>Illumi.</span>  Copyright © 2023</p>
  </FooterContainer>
);

export default Footer;
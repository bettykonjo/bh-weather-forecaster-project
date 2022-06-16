import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: grey;
  padding: 0.8rem 1.7rem;
  width:65%;
  h4 {
    font-family: cursive;
    color: blue;
    margin: 0.5px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Betelihem A Hayle © {new Date().getFullYear()}</h3>
    </FooterWrapper>
  );
};

export default Footer;
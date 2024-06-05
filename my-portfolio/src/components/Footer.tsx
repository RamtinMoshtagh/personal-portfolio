// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--secondary-color);
  padding: 10px 0;
  text-align: center;
  margin-top: 40px;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: var(--primary-color);
  font-size: 0.8em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Ramtin Moshtagh. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

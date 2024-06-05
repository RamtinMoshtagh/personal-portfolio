// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--secondary-color);
  padding: 10px 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  color: var(--primary-color);
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Ramtin - Passionate Web Developer</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

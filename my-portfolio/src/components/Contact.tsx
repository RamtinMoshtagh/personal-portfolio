// src/components/Contact.tsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const ContactTitle = styled.h2`
  font-size: 1.8em;
  color: var(--title-color);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const ContactList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContactItem = styled.a`
  color: var(--text-color);
  font-size: 1.5em;
  transition: color 0.3s;

  &:hover {
    color: var(--title-color);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactTitle>Let's Connect</ContactTitle>
      <ContactList>
        <ContactItem href="https://github.com/RamtinMoshtagh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </ContactItem>
        <ContactItem href="https://www.linkedin.com/in/ramtinmoshtagh" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </ContactItem>
        <ContactItem href="https://www.instagram.com/ramtinmoshtagh" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </ContactItem>
        <ContactItem href="mailto:ramtinmoshtagh@gmail.com">
          <FaEnvelope />
        </ContactItem>
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;

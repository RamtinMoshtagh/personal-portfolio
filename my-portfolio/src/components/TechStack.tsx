// src/components/TechStack.tsx
import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiSanity, SiNextdotjs, SiVercel, SiAuth0, SiHeroku, SiStripe } from 'react-icons/si';

const TechStackContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const TechStackTitle = styled.h2`
  font-size: 1.8em;
  color: var(--title-color);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const TechStackList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechStackItem = styled.li`
  margin: 10px 20px;
  font-size: 1.5em;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TechStackName = styled.span`
  margin-top: 5px;
  font-size: 0.8em;
`;

const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Sanity', icon: <SiSanity /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Auth0', icon: <SiAuth0 /> },
  { name: 'Heroku', icon: <SiHeroku /> },
  { name: 'Stripe', icon: <SiStripe /> },
];

const TechStack: React.FC = () => {
  return (
    <TechStackContainer>
      <TechStackTitle>Current Tech Stack</TechStackTitle>
      <TechStackList>
        {techStack.map(tech => (
          <TechStackItem key={tech.name}>
            {tech.icon}
            <TechStackName>{tech.name}</TechStackName>
          </TechStackItem>
        ))}
      </TechStackList>
    </TechStackContainer>
  );
};

export default TechStack;

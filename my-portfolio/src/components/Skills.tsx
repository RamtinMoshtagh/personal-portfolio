// src/components/Skills.tsx
import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaVuejs, FaGitAlt, FaFigma, FaBootstrap, FaWordpress, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiAuth0, SiVercel, SiSanity, SiVisualstudiocode, SiTrello, SiWebflow, SiMysql } from 'react-icons/si';

const SkillsContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 1.8em;
  color: var(--title-color);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  margin: 10px 20px;
  font-size: 1.5em;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.span`
  margin-top: 5px;
  font-size: 0.8em;
`;

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Sanity', icon: <SiSanity /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Auth0', icon: <SiAuth0 /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vue', icon: <FaVuejs /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
  { name: 'Trello', icon: <SiTrello /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'WordPress', icon: <FaWordpress /> },
  { name: 'Webflow', icon: <SiWebflow /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
];

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        {skills.map(skill => (
          <SkillItem key={skill.name}>
            {skill.icon}
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;

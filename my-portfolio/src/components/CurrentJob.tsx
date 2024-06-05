// src/components/CurrentJob.tsx
import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.8em;
  color: var(--title-color);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const JobDescription = styled.p`
  font-size: 1em;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`;

const JobLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const CurrentJob: React.FC = () => {
  return (
    <JobContainer>
      <JobTitle>Current Job</JobTitle>
      <JobDescription>
        I am currently working as a Junior Frontend Developer at <JobLink href="https://www.zenmath.no" target="_blank" rel="noopener noreferrer">Zen Math AS</JobLink>.
      </JobDescription>
      <JobDescription>
        Zen Math is an advanced and scientifically-based platform that provides a unique learning experience for students in mathematics. By focusing on the specific strengths and needs of students, Zen Math offers a range of benefits that set it apart from other solutions on the market.
      </JobDescription>
    </JobContainer>
  );
};

export default CurrentJob;

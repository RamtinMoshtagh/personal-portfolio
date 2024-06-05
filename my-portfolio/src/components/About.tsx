// src/components/About.tsx
import React from 'react';
import styled from 'styled-components';
import profileImage from '../assests/profile.jpeg';

const AboutContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 40px auto;
  }
`;

const AboutTitle = styled.h2`
  font-size: 1.8em;
  color: var(--title-color);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const AboutText = styled.p`
  font-size: 1em;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>Meet Ramtin</AboutTitle>
      <ProfileImageContainer>
        <ProfileImage src={profileImage} alt="Ramtin Moshtagh" />
      </ProfileImageContainer>
      <AboutText>
        Hello! I'm Ramtin Moshtagh, a passionate web developer deeply engaged in creating innovative and user-friendly interfaces that enrich user experiences. My curiosity drives me to continuously learn and absorb new knowledge, particularly in backend systems, as I aspire to become a skilled fullstack developer. I greatly value collaboration with people from diverse fields and cultures, as building relationships not only enhances my personal growth but also enriches the work environment.
      </AboutText>
      <AboutText>
        My technical expertise is complemented by my ability to work effectively in teams, a passion for exploring new technologies, and a commitment to self-directed learning. Currently, I am delving into backend systems to gain a deeper understanding of technology as a whole, which is crucial for my development as a developer.
      </AboutText>
      <AboutText>
        Beyond my technical skills, I bring a set of personal qualities that I believe are of great value. My passion for technology and innovation drives me to continuously explore new solutions and improvements. I have a strong ability to learn quickly and an enthusiasm for participating in and contributing to dynamic work environments.
      </AboutText>
      <AboutText>
        When I'm not coding, you can find me engaging in community-building activities, spending time with family, or playing sports. My journey as a developer is driven by a commitment to delivering cutting-edge solutions and a focus on continuous learning and development. I look forward to the opportunities that lie ahead and am excited to contribute to innovative projects that make a difference.
      </AboutText>
    </AboutContainer>
  );
};

export default About;

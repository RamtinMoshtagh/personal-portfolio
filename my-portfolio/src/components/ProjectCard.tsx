// src/components/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  transition: transform 0.2s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: var(--secondary-color);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: var(--primary-color);
`;

const CardDescription = styled.p`
  margin: 0 0 15px 0;
  color: var(--text-color);
`;

const CardLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--title-color);
  }
`;

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubLink, liveLink }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </CardLink>
        <CardLink href={liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </CardLink>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
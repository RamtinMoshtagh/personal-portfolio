// src/App.tsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import CurrentJob from './components/CurrentJob';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';
import holidazeImage from './assests/project-one.png';
import auctionItImage from './assests/project-two.png';
import shoppyImage from './assests/project-three.png';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #324040; /* Charcoal */
    --secondary-color: #B8B1A0; /* Dark Sand Dollar */
    --accent-color: #8A9EA0; /* Slate */
    --background-color: #C9C1B0; /* Sand Dollar */
    --text-color: #324040; /* Charcoal */
    --title-color: #324040; /* Charcoal */
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  color: var(--title-color);
  margin: 40px 0 20px;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const projects = [
  {
    title: 'Holidaze',
    description: 'Holidaze is a comprehensive booking platform designed to facilitate seamless holiday planning and accommodation bookings. This project provides users with an intuitive interface to browse, book, and manage their holiday accommodations.',
    image: holidazeImage,
    githubLink: 'https://github.com/RamtinMoshtagh/holidaze-booking',
    liveLink: 'https://holidazey.netlify.app',
  },
  {
    title: 'Auction it',
    description: 'Auction Site is a dynamic web application that allows users to participate in online auctions. Users can browse open and closed listings, place bids, create new listings, and manage their profiles.',
    image: auctionItImage,
    githubLink: 'https://github.com/RamtinMoshtagh/auction-site',
    liveLink: 'https://auction-it.netlify.app',
  },
  {
    title: 'Shoppy',
    description: 'This project is an e-commerce store built with React. It allows users to browse products, add them to the cart, and proceed to checkout. Additionally, it includes features like contact form submission and checkout success page.',
    image: shoppyImage,
    githubLink: 'https://github.com/RamtinMoshtagh/Ecom-store/tree/main/ecommerce-app',
    liveLink: 'https://shoppeyy.netlify.app',
  },
];

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <About />
        <CurrentJob />
        <TechStack />
        <Skills />
        <SectionTitle>Recent Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </ProjectGrid>
        <Contact />
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;
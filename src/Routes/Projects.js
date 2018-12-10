import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import pacman from '../assets/pacman.png';
import brewly from '../assets/brewly.png';
import parkOwl from '../assets/ParkOwl.png';
import hackathon from '../assets/hackathon.png';
import lvsPortfolio from '../assets/lvsPortfolio.png';

const PROJECT_DATA = [
  {
    title: 'Pacman',
    tagline: 'A clone of a classic',
    link: 'https://zvansom.github.io/Pacman/',
    github: 'https://github.com/zvansom/Pacman',
    imgSrc: pacman,
    description: 'My earliest memory of a computer game was this arcade classic.  This is my humble tribute to Pacman, Inky, Blinky, Pinky, and Clyde.  This project was built on the Phaser game engine and in Javascript.  It was a challenging and rewarding experience as I learned about collision detection, animating sprites, and state management.',
  },{
    title: 'Brewly',
    tagline: 'A homebrewers resource',
    link: 'https://zvansom-brewly.herokuapp.com/',
    github: 'https://github.com/zvansom/Brewly',
    imgSrc: brewly,
    description: 'In my free time, my wife and I enjoy brewing our own beer.  We\'ve always used a pen and paper to record our notes on the process.  Now we use 1s and 0s.  This was my first full-stack project.  It follows the traditional MVC structure and relies on RESTful routing.  The server side application is written in Express in a Node environment.  It uses a Postgres relational database for persistant data.  The views are all rendered from embedded Javascript.',
  },{
    title: 'ParkOwl',
    tagline: 'Civic minded mobile app for public parks',
    github: 'https://github.com/zvansom/hackathon-parks',
    imgSrc: parkOwl,
    description: 'In this hackathon we worked as teams of four consisting of 2 UX Designers and 2 Devs.  We were tasked with coming up with a citizen politic web application.  The overall concept is a mobile application that facilitates reporting damage or accesability issues in public parks.  It is a full stack application, built in Express with user sessions.  Primary development occured in a 6.5 hour period.',
    award: hackathon,
  },{
    title: 'Lindsay VanSomeren Portfolio',
    tagline: 'A portfolio site for a freelance writer',
    link: 'https://lindsayvansomeren.com',
    github: 'https://github.com/zvansom/LVSPortfolioClient',
    imgSrc: lvsPortfolio,
    description: `This was the first project I completed since graduating from General Assembly. This website was commissioned by my wife to upgrade and replace her existing portfolio page created via a Wordpress template. She worked with a professional designer to finalize the overall design and flow of the site. Then images and PSD files were turned over to me for the development. The project was bootstrapped with Create-React-App. It also features a contact form that routes collected data through a transactional email API to forward all messages received securely through to the client's email. This project was also the first time I worked with FTP.`
  }
]

export default class Projects extends Component {
  render() {
    return (
    <main className="projects">
      <h2 className="projects--title">Projects</h2>
      {PROJECT_DATA.map((project, idx) => 
        <ProjectCard
          key={idx}
          title={project.title}
          tagline={project.tagline}
          github={project.github}
          link={project.link}
          imgSrc={project.imgSrc}
          description={project.description}
          awardSrc={project.award}
        />)}
      </main> 
    )
  }
}

import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import pacman from '../assets/pacman.png';
import brewly from '../assets/brewly.png';
import parkOwl from '../assets/ParkOwl.png';

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
    description: '',
    award: 'Hackathon winner',
  },
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
          award={project.award}
        />)}
      </main> 
    )
  }
}

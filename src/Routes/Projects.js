import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';

const PROJECT_DATA = [
  {
    title: 'Pacman',
    tagline: 'A clone of a classic',
    link: 'https://zvansom.github.io/Pacman/',
    imgSrc: '../assets/pacman.png',
    description: 'My earliest memory of a computer game was this arcade classic.  This is my humble tribute to Pacman, Inky, Blinky, Pinky, and Clyde.  This project was built on the Phaser game engine and in Javascript.  It was a challenging and rewarding experience as I learned about collision detection, animating sprites, and state management.',
  },{
    title: 'Brewly',
    tagline: 'A homebrewers resource',
    link: 'https://zvansom-brewly.herokuapp.com/',
    imgSrc: '../assets/brewly.png',
    description: 'In my free time, my wife and I enjoy brewing our own beer.  We\'ve always used a pen and paper to record our notes on the process.  Now we use 1s and 0s.  This was my first full-stack project.  It follows the traditional MVC structure and relies on RESTful routing.  The server side application is written in Express in a Node environment.  It uses a Postgres relational database for persistant data.  The views are all rendered from embedded Javascript.',
  }
]

export default class Projects extends Component {
  render() {
    return (
    <main className="page">
      <h2 className="page--title">Projects</h2>
      {PROJECT_DATA.map(project => 
        <ProjectCard 
          title={project.title}
          tagline={project.tagline}
          link={project.link}
          imgSrc={project.imgSrc}
          description={project.description}
        />)}
      </main> 
    )
  }
}

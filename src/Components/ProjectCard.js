import React from 'react'

const ProjectCard = props => (
  <section className="project-card">
    <h3 className="project-card--title">{props.title}</h3>
    <h4 className="project-card--subtitle">{props.tagline}</h4>
    <p className="project-card--description">{props.description}</p>
    <a className="project-card--screenshot" href={props.link}>
      <img src={props.imgSrc} alt={props.title} />
    </a>
  </section>
)

export default ProjectCard;
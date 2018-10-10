import React from 'react'

const ProjectCard = props => (
  <section className="project-card">
    <h3 className="project-card--title">{props.title}</h3>
    <h4 className="project-card--subtitle">{props.tagline}</h4>
    <div className="project-card--content">
      <p className="project-card--description">{props.description}</p>
      <a className="project-card--link" href={props.github}>Github</a>
      <a className="project-card--link" href={props.link}>Link</a>
    </div>
    <a href={props.link}>
      <img className="project-card--screenshot" src={props.imgSrc} alt={props.title} />
      <p>{props.award}</p>
    </a>
  </section>
)

export default ProjectCard;
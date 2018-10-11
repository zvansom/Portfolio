import React from 'react'

const ProjectCard = ({title, tagline, description, github, link, imgSrc, award=''}) => (
  <section className="project-card">
    <h3 className="project-card--title">{title}</h3>
    <h4 className="project-card--subtitle">{tagline}</h4>
    <div className="project-card--content">
      <p className="project-card--description">{description}</p>
      <a className="project-card--link" href={github}>Github</a>
      {link && <a className="project-card--link" href={link}>Link</a>}
    </div>
    <div className="image-container">
      <img className="project-card--screenshot" src={imgSrc} alt={title} />
      <p className="project-card--awards">{award}</p>
    </div>
  </section>
)

export default ProjectCard;
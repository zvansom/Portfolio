import React from 'react'

const ProjectCard = ({title, tagline, description, github, link, imgSrc, awardSrc}) => (
  <section className="project-card">
    <h3 className="project-card--title">{title}</h3>
    <h4 className="project-card--subtitle">{tagline}</h4>
    <div className="project-card--content">
      <p className="project-card--description">{description}</p>
      <a className="project-card--link" rel="noopener noreferrer" target="_blank" href={github}>Github</a>
      {link && <a className="project-card--link" rel="noopener noreferrer" target="_blank" href={link}>Link</a>}
    </div>
    <div className="image-container">
      <img className="project-card--screenshot" src={imgSrc} alt={title} />
      {awardSrc &&
      <img className="project-card--awards" src={awardSrc} alt="award" />}
    </div>
  </section>
)

export default ProjectCard;
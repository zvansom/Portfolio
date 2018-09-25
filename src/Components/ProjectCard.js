import React from 'react'

const ProjectCard = props => (
  <section>
    <h3>{props.title}</h3>
    <h4>{props.tagline}</h4>
    <a href={props.link}><img src={props.imgSrc} alt={props.title} /></a>
    <p>{props.description}</p>
  </section>
)

export default ProjectCard;
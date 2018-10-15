import React from 'react';
import headshot from '../assets/headshot.png';

const About = () => (
  <main className="about">
    <h2 className="about--title">About Me</h2>
    <h3 className="about--headline">My path to web development is as common as it is unusual, but looking closer a theme started to emerge: learn a set of skills, proceed to solve problems.</h3>

    <p className="about--text">This theme first showed up during my time in the Army. Whether it involved jumping out of a plane or earning my Expert Infantryman's Badge, I found that by challenging myself to learn and demonstrate mastery of a skill it gave me tremendous personal reward!</p>

    <p className="about--text">After leaving the Army I started to explore my love for building things.  I became a carpenter and spent 3 years as an apprentice building hospitals and medical clinics.  Not only did this allow me to learn new skills, but it presented unique and new challenges for me to tackle.</p>
    
    <img className="about--image" src={headshot} alt="Zach VanSomeren" />

    <p className="about--text">College was one challenge in my life that had beaten me before and that I was determined to conquer. I enrolled and graduated <em>cum laude</em> from Colorado State University with a Bachelors Degree in Construction Management.  Despite the success I had in school while earning my degree, I didn't feel satisfied because I didn't feel challenged.  Enter web development.</p>

    <p className="about--text">While I was finishing my degree, I started teaching myself web development.  I used a number of different resources to learn.  I started by learning web fundamentals and basic UX principles on Udemy.  Then I studied front-end web development with FreeCodeCamp's curriculum.  It was during this self-studing that sparked a personal passion for learning web technologies.</p>

    <p className="about--text">At my first opportunity, I enrolled in and completed a three month web development immersive bootcamp at General Assembly.  Those three months proved to be both incredibly demanding as well as immensely rewarding.  I was able to harness the skills that I had learned on my own, and reinforced them with additional skills in a highly accelerated and demanding environment.</p>

    <p className="about--text">In web development, I've found the perfect combination of continuous challenges and a continuous need to learn more and further my skills.  Nothing has been more personally rewarding to me than solving the problems I'm presented when working on websites.</p>

    <h3 className="about--skills">Skills</h3>
    <ul>
      <li>React</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Javascript</li>
      <li>MongoDb</li>
      <li>Postgres</li>
      <li>GraphQL</li>
      <li>CSS3</li>
      <li>HTML</li>
    </ul>
  </main>
);

export default About;

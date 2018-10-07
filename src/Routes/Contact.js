import React, { Component } from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

export default class Contact extends Component {
  render() {
    return (
      <main className="contact">
        <h2 className="contact--title">Contact Me</h2>
        <h3 className="contact--subtitle">Now all that's left is for me to get to know you!</h3>
        <div>
          <a className="contact--link" href="https://github.com/zvansom">
            <img className="contact--image" src={github} alt="Github" />
          </a>
          <a className="contact--link" href="https://www.linkedin.com/in/zach-vansomeren/">
            <img className="contact--image" src={linkedin} alt="Linked In" />
          </a>
          <a className="contact--link" href="mailto:zvansomeren@gmail.com">Email</a>
        </div>
      </main>
    )
  }
}

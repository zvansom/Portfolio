import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <main className="page">
        <h2>Contact Me</h2>
        <h3>Now all that's left is for me to get to know you!</h3>
        <a href="https://github.com/zvansom">
          <img src="" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/zach-vansomeren/">
          <img src="" alt="Linked In" />
        </a>
        <a href="mailto:zvansomeren@gmail.com">Email</a>
      </main>
    )
  }
}

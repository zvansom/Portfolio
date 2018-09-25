import React, { Component } from 'react';

// Look into EmailJS API
// Look into reCATPTCHA

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleChange = e => {
   this.setState({
     [e.target.name]: e.target.value,
   })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted')
    // Insert EmailJS call here.
  }

  render() {
    return (
      <main>
        <h2>Contact Me</h2>
        <h3>Now all that's left is for me to get to know you!</h3>
        <h4>Get in touch and let's build your little corner of the internet together.</h4>
        <h5>You can find me on if you follow the links below, or fill out this form to get in touch with me.</h5>
        <a href="#"><img src="" alt="Github" /></a>
        <a href="#"><img src="" alt="Linked In" /></a>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
          <textarea type="text" name="message" placeholder="message" value={this.state.message} onChange={this.handleChange}></textarea>
          {/* RECAPTCHA HERE */}
          <input type="submit" value="Submit" />
        </form>
      </main>
    )
  }
}

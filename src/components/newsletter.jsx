import React, { PureComponent } from 'react';

import 'whatwg-fetch';
import classnames from 'classnames';

class Newsletter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      success: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

    fetch(`https://script.google.com/macros/s/AKfycbyZu3JyC44b6fUd3agpwjUiThBQ4baAyY7q3BYGlUP8mN5u_yZb/exec?email=${email}`, {
      method: 'GET'
    })
    .then(() => {
      this.setState({ success: true });
    })
    .catch(function(error) {
      console.log('request failed', error)
    });
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {

    const successClasses = classnames({
      'success-message': true,
      '-visible': this.state.success
    })

    return (
      <div className="c-newsletter">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            placeholder="Your mail here"
            onChange={e => this.handleInput(e)}
            required
          />
          <button type="submit">Send</button>
        </form>
        <span className={successClasses}>Thanks for subscribing!</span>
      </div>
    );
  }
}

export default Newsletter;

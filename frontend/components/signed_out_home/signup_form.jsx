import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }
 
  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="session-errors-list">
          {
            this.props.errors.map((error, i) => (
              <li className="session-error" key={`error-${i}`}>
                {error}
              </li>
            ))
          }
        </ul>
      )
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="new-account-box">
        <h2>New here? Create a free account!</h2>
        <form
          onSubmit={this.handleSubmit}
          className="signup-form"
        >
          <input type="text"
            className="signup-input"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            placeholder="First Name"
          />
          <input type="text"
            className="signup-input"
            value={this.state.last_name}
            onChange={this.update("last_name")}
            placeholder="Last Name"
          />
          <input type="email"
            className="signup-input"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email Address"
          />
          <input type="password"
            className="signup-input"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        {this.renderErrors()}
      </div>
    )
  }
}

export default SignUpForm;
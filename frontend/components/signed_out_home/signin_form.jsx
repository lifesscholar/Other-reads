import React from "react";

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  renderErrors () {
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

  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state);
  }
  
  render() {
    const demoUser = { email: "a@a.com", password: "hunter2" }
    return (
      <div className="signin-box">
        <form 
          onSubmit={this.handleSubmit} 
          className="signin-form"
          >

          <input type="email"
            className="signin-input"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email Address"
            />
            <input type="password"
              className="signin-input"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <button className="demo-user-signin" onClick={() => this.props.signin(demoUser)}>Demo User</button>
        {/* <a href="/" className="demo-user-signin" onClick={() => this.props.signin(demoUser)}>Demo User</a> */}
        {this.renderErrors()}
      </div>
    )
  }

};

export default SignInForm;
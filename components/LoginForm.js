class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div><input type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        /></div>
        <div><input type="text"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        /></div>
        <div><button type="submit">Submit</button></div>
      </form>
    )
  }
}

export default LoginForm;

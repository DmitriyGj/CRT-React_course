import './App.css';
import React, { Component } from 'react'

class LoginControl extends Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    console.log('LoginControl is mounted');
  }

  componentDidUpdate(){
    console.log('LoginControl is updated')
  }

  handleLogout(){
    this.setState({isLoggedIn: false});
  }

  handleLogin(){
    this.setState({isLoggedIn: true});
  }

  render(){
    return<div>
      <Header isLoggedIn={this.state.isLoggedIn }></Header>
      {this.state.isLoggedIn
        ? <LogoutButton onClick={this.handleLogout}></LogoutButton>
        : <LoginButton onClick = {this.handleLogin}></LoginButton>
      }
    </div>
  }
}

class GreetingsUser extends Component{
  constructor(props){
    super(props);
  };

  componentDidMount(){
    console.log('GreetingsUser mounted')
  };

  componentDidUpdate(){
    console.log('GreetingsUser updated')
  };

  componentWillUnmount(){
    console.log('GreetingsUser unmounted')
  };

  render(){
    return <div>
      Welcome
    </div>;
  };
}

class GreetingsGuest extends Component{
  constructor(props){
    super(props);
  };

  componentDidMount(){
    console.log('GreetingsGuest mounted')
  };

  componentDidUpdate(){
    console.log('GreetingsGuest updated')
  };

  componentWillUnmount(){
    console.log('GreetingsGuest unmounted')
  };

  render(){
    return <div>
      PleaseLogin
    </div>;
  };
}


class LoginButton extends Component{
  constructor(props){
    super(props);
  };
  render(){
  return <button onClick={this.props.onClick}>
          Login
          </button>
  }
}

class LogoutButton extends Component{
  constructor(props){
    super(props);
  };

  render(){
  return <button onClick={this.props.onClick}>
          Logout
          </button>
  }
}

class Header extends Component{
  constructor(props){
    super(props);
  };

  render(){
    return <div>{this.props.isLoggedIn? <GreetingsUser/>:<GreetingsGuest/>}</div> 
  }
}


function App() {
  return (
    <div className="App">
      <LoginControl></LoginControl>
    </div>
  );
}

export default App;

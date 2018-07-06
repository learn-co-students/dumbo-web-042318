import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'

class App extends Component {

  state = {
    auth: {
      currentUser: {}
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      const options =   {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      }
      fetch('http://localhost:3001/api/v1/reauth', options)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
            auth: {
              currentUser: user
            }
          })

        })
    }
  }

  handleLogin = (user) => {
    this.setState({
        auth: {
          currentUser: user
        }
      }, () => {
        localStorage.setItem('token', user.id)
      })
  }

  handleLogout = () => {
    this.setState({
      auth: {
        currentUser: {}
      }
    })
    localStorage.clear()
  }

  render() {
    const loggedIn = !!this.state.auth.currentUser.id
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.auth.currentUser}
          onLogout={this.handleLogout}
        />
        {!loggedIn ? <LoginForm
          onLogin={this.handleLogin}
         /> : <Welcome /> }
      </div>
    );
  }
}

export default App;

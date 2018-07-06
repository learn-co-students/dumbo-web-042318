import React from 'react';

class Navbar extends React.Component {

  render() {
    const loggedIn = !!this.props.currentUser.id
    return (
      <div className='ui top fixed inverted blue menu'>
          <h2 className="ui header">
            <i className='detective icon' />
            <div className="content">Auth App</div>
            <div className="sub header">To make sure you are who you say you are</div>
          </h2>
        <div className="right menu">
          {loggedIn ? <div className="ui primary button" onClick={this.props.onLogout}> Log Out </div> : (
            <div className="ui primary button"> Not Logged In </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar

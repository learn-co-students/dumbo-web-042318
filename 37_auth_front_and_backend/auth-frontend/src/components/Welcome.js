import React from 'react';
import withAuth from '../hocs/withAuth'

class Welcome extends React.Component {

  // componentDidMount () {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const options =   {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Authorization': token
  //       }
  //     }
  //     fetch('http://localhost:3001/api/v1/reauth', options)
  //     .then(resp => resp.json())
  //     .then(user => {
  //       this.setState({
  //           auth: {
  //             currentUser: user
  //           }
  //         })
  //
  //       })
  //   } else {
  //     this.props.history.push('/login')
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <div id='welcome'>
          <h1> Welcome to the Home Page </h1>
      </div>
    );
  }
}

export default withAuth(Welcome)

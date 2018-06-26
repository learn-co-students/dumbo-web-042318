import React, {Component} from 'react'


class Count extends Component {

  render () {
    return (
      <div className='footer'>
        There are currently {this.props.characterCount} characters listed
      </div>
    )
  }
}


export default Count

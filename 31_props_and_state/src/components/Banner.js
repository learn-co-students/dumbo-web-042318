import React, {Component} from 'react'

class Banner extends Component {

  // constructor () {
  //   super()
  //
  //   this.state = {
  //     isFocused: false
  //   }
  //
  //   this.handleMouseEnter = this.handleMouseEnter.bind(this)
  // }
  //
  // handleMouseEnter () {
  //   console.log(this)
  // }

  state = {
    isFocused: false,
    objectKey: {
      hi: 'hello',
      goodbye: 'buhbye'
    }
  }

  toggleMouseMove = () => {
    this.setState({
      isFocused: !this.state.isFocused,
      objectKey: {
        ...this.state.objectKey,
        hi: 'hey'
      }
    })
  }

  render() {
    return (
      <div className='banner' onMouseEnter={this.toggleMouseMove} onMouseLeave={this.toggleMouseMove}>
        <div className='content'>
          {this.state.isFocused ? <h1> A long time ago, in a module far far away.... </h1> : <h2> Return of the API </h2>}
        </div>
      </div>
    )
  }

}

export default Banner

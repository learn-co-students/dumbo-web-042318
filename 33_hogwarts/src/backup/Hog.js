import React, { Component } from 'react';

class Hog extends Component {
  state = {
    displayDescription: false
  }

  imgReformat = () => {
    return this.props.name.toLowerCase().replace(/\s/g, "_")

  }

  handleClick = () => {
    this.setState({
      displayDescription: !this.state.displayDescription
    })
  }

  render() {
    return (
      <div className="ui eight wide column card" onClick={this.handleClick} >
        <div className="image">
            <img src={require(`../hog-imgs/${this.imgReformat()}.jpg`)}/>
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div className="meta">
            <span className="specialty">{this.props.specialty}</span>
          </div>
            { !this.state.displayDescription ? <div>...</div> :
            <div className="description">
              <p>{this.props["highest medal achieved"]}</p>
              <p>{this.props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
            </div>
            }
        </div>
        <div className="extra content">
            {this.props.greased ? "This hog is greased" : "This hog is not greased"}
        </div>
      </div>
    )
  }
}

export default Hog;

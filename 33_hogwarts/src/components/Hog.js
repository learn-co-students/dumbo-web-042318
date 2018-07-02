import React, { Component } from 'react';

class Hog extends Component {

  state = {
    clicked: false
  }

  onPigClick = () => {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked
      }
    })
  }


  render() {

    return (
     <div className="ui eight wide column card" onClick={this.onPigClick}>
        <div className="image">
            <img />
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div className="meta">
            <span className="specialty">{this.props.specialty}</span>
          </div>
            <div className="description">
              { !this.state.clicked ? '...' : ( <div>
              <p>{this.props["highest medal achieved"]}</p>
              <p>{this.props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
            </div>
            )}
            </div>
        </div>
        <div className="extra content">
            {this.props.greased ? "This hog is greased" : "This hog is not greased"}
        </div>
      </div>
    )
  }
}

export default Hog;

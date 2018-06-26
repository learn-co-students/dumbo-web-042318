import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    // debugger;
  }
  render() {
    const lis = this.props.lis.map((el) => <li key={el}>{el}</li>);

    return (
      <ul>
        <img
          width="100px"
          height="100px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Collage_of_Nine_Dogs.jpg/520px-Collage_of_Nine_Dogs.jpg"
        />
        <li>woot!</li>
        <li>excited for react</li>
        <input type="checkbox" />
        <input type="email" />
        {lis}
      </ul>
    );
  }
}

export default List;

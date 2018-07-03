import React from 'react';
import SearchBar from './SearchBar';

export default class NavBar extends React.Component {
  render() {
    <nav>
      {/* link to popular videos */}
      <SearchBar onSearch={this.props.onSearch} />
    </nav>;
  }
}

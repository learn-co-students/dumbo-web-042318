import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchInput: ''
  };

  handleInput = (e) => {
    this.setState(
      {
        searchInput: e.target.value
      },
      () => {
        this.props.onSearch(this.state.searchInput);
      }
    );
  };

  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              value={this.state.searchInput}
              type="text"
              placeholder="Search Youtube..."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

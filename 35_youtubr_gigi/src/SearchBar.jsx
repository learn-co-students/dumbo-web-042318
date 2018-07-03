import React from 'react';
import _ from 'lodash'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: props.searchTerm }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    console.log('here');
    this.setState({searchTerm: e.target.value})
    this.props.handleSearch(this.state.searchTerm)
  }
  render() {
    return (
      <form >
        <input type="text" placeholder="Search YouTubr" name="search" value={this.props.searchTerm}
          onChange={(e) => _.debounce(() => this.handleChange(e), 300)}
        />
        <button type="submit">Search!</button>
      </form>
    )
  }
}
// onSubmit={(e) => {
//   e.preventDefault()
//   this.props.handleSearch(e.target.search.value)}}
export default SearchBar

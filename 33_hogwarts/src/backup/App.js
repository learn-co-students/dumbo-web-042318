import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from './PigPen'
import Filter from './Filter'

import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs,
    filterBy: {
      greasedOnly: false,
      sortBy: 'name'
    }
  }

  onGreaseClick = () => {
    this.setState(prevState => {
      return {
          filterBy: {
          ...prevState.filterBy,
          greasedOnly: !prevState.filterBy.greasedOnly
        }
      }
    })
  }

  onFilterChange = (e) => {
    const newSort = e.target.value
    this.setState(prevState => {
      return {
          filterBy: {
          ...prevState.filterBy,
          sortBy: newSort
        }
      }
    })
  }

  sortHogs = () => {
    const { hogs, filterBy: { sortBy } } = this.state
    const hogsCopy = [...hogs]
    if ( sortBy === 'name') {
      hogsCopy.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    } else if (sortBy === 'weight') {
      hogsCopy.sort((a, b) => {
        return b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
    return hogsCopy
  }

  filterHogs = (sortedHogs) => {
    if (this.state.filterBy.greasedOnly){
      const filteredHogs = sortedHogs.filter(hog => hog.greased)
      return filteredHogs
    } else {
      return sortedHogs
    }
  }

  wantedHogs = () => {
    return this.filterHogs(this.sortHogs())
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleGreaseClick={this.onGreaseClick}
            handleFilterChange={this.onFilterChange}
            greasedOnly={this.state.filterBy.greasedOnly}
            selectedSort={this.state.filterBy.sortBy}
          />
          < PigPen hogs={this.wantedHogs()}/>
      </div>
    )
  }
}

export default App;

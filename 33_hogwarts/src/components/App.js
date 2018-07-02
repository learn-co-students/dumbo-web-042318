import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from './PigPen'
import Filter from './Filter'

import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs,
    sortBy: 'weight',
    filterGreased: true
  }

  onGreaseClick = () => {
    this.setState((prevState)=>{
      return {
        filterGreased: !prevState.filterGreased
      }
    })
  }

  onSortChange = (e) => {
    const newSort = e.target.value
    this.setState({
      sortBy: newSort
    })
  }

  filterHogs = () => {
    if (this.state.filterGreased){
      const filteredHogs = this.state.hogs.filter((hog)=> hog.greased)
      return filteredHogs
    } else {
      return this.state.hogs
    }
  }

  sortHogs = (filteredHogs) => {
    const copyHogsArr = [...filteredHogs]
    if (this.state.sortBy === 'name') {
      const sortedHogs = copyHogsArr.sort((a,b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
      return sortedHogs
    } else {
      const sortedHogs = copyHogsArr.sort((a,b) => {
        return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']- a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
      return sortedHogs
    }
  }


  getWantedHogs = () => {
    return this.sortHogs(this.filterHogs())
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter
          selectedSort={this.state.sortBy}
          greased={this.state.filterGreased}
          handleGreaseClick={this.onGreaseClick}
          handleSortChange={this.onSortChange}
          />
          < PigPen hogs={this.getWantedHogs()}/>
      </div>
    )
  }
}

export default App;

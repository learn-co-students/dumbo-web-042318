import React, { Component } from 'react';
import './index.css';

import data from './swapiData'

import CharacterList from './components/CharacterList'
import Banner from './components/Banner'
import CharacterForm from './components/Form'
import Count from './components/Count'


class App extends Component {

  state = {
    characters: data
  }


  handleSubmit = (newCharacter) => {
    this.setState({
      characters: [...this.state.characters, newCharacter]
    })
  }

  isFormNameInputValid = (name) => {
    const characterNames = this.state.characters.map(character => character.name.toLowerCase())
    return !characterNames.includes(name.toLowerCase())
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <CharacterList characters={this.state.characters}/>
        <CharacterForm onFormSubmit={this.handleSubmit} isValid={this.isFormNameInputValid}/>
        <Count characterCount={this.state.characters.length}/>
      </div>
    );
  }
}

export default App;

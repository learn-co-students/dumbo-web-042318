import React, {Component} from 'react'

import CharacterCard from './CharacterCard'

class CharacterList extends Component {

  render () {
    const characterCards = this.props.characters.map (character => {
      return <CharacterCard key={character.name} character={character}/>
    })
  return (
      <div className='container'>
        {characterCards}
      </div>
    )
  }

}

// make this a functional component

export default CharacterList

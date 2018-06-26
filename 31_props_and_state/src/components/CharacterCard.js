import React from 'react'

function CharacterCard(pickle) {
    const {image, name, height, birth_year, homeworld} = pickle.character
    console.log(pickle)
    return (
      <div className='card'>
        <img src={image} />
        <h1> {name} </h1>
        <p> Height: {height} </p>
        <p> Birth Year: {birth_year} </p>
        <h3> Homeworld </h3>
        <p> Name: {homeworld.name} </p>
        <p> Climate: {homeworld.climate} </p>
      </div>
    )
}

export default CharacterCard

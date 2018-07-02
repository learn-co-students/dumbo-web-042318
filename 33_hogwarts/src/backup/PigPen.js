import React from 'react';

import Hog from './Hog'

const PigPen = (props) => {

  const piggies = props.hogs.map(hog => {
    return <Hog key={hog.name} {...hog}/>
  })

  return (
    <div className="ui grid container">
      {piggies}
    </div>
  )
}

export default PigPen

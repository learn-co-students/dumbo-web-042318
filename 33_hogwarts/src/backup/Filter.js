
import React from 'react'

const Filter = ({handleGreaseClick, handleFilterChange, greasedOnly, selectedSort}) => {
    return (
      <div className="filterWrapper">
      <form>
      <label>
        greased hogs only
        <input
            name="greased"
            type="checkbox"
            checked={greasedOnly}
            onChange={handleGreaseClick} />
        </label>
        <select
          name="type"
          value={selectedSort}
          onChange={handleFilterChange}
        >
        <option value="name">Name (alphabetical)</option>
        <option value="weight">Weight</option>
        </select>

        </form>
      </div>
    )
}

export default Filter

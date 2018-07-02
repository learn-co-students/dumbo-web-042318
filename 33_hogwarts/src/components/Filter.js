
import React from 'react'

const Filter = (props) => {
    return (
      <div className="filterWrapper">
      <form>
      <label>
        greased hogs only
        <input
            name="greased"
            type="checkbox"
            checked={props.greased}
            onChange={props.handleGreaseClick}
          />
        </label>
        <select
          name="type"
          value={props.selectedSort}
          onChange={props.handleSortChange}
        >
        <option value="name">Name (alphabetical)</option>
        <option value="weight">Weight</option>
        </select>

        </form>
      </div>
    )
}

export default Filter

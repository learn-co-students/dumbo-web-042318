import React, {Component} from 'react'


class CharacterForm extends Component {

  state = {
    image: '',
    name: '',
    height: '',
    birth_year: '',
    homeworld: {
      name: '',
      climate: ''
    }
  }

  handleChange = (e) => {
    if (e.target.name.includes('homeworld')) {
      let keyName = e.target.name.split('-')[1]

      this.setState({
        ...this.state,
        homeworld: {
          ...this.state.homeworld,
          [keyName]: e.target.value
        }
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state)
    this.setState({
      image: '',
      name: '',
      height: '',
      birth_year: '',
      homeworld: {
        name: '',
        climate: ''
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Image </label>
          <input onChange={this.handleChange}
                type="text"
                name="image"
                value={this.state.image}
            />
        </div>
        <div>
          <label> Name </label>
          <input onChange={this.handleChange}
                style={this.props.isValid(this.state.name) ? {color:'black'} : {color: 'red'}}
                type="text"
                name="name"
                value={this.state.name}
            />
        </div>
        <div>
          <label> Height </label>
          <input onChange={this.handleChange}
              type="text"
              name="height"
              value={this.state.height}
            />
        </div>
        <div>
          <label> Birth Year </label>
          <input onChange={this.handleChange}
              type="text"
              name="birth_year"
              value={this.state.birth_year}
            />
        </div>
        <div>
          <label> Homeworld Name</label>
          <input onChange={this.handleChange}
              type="text"
              name="homeworld-name"
              value={this.state.homeworld.name}
            />
        </div>
        <div>
          <label> Homeworld Climate</label>
          <input onChange={this.handleChange}
              type="text"
              name="homeworld-climate"
              value={this.state.homeworld.climate}
            />
        </div>
        <input type="submit" value='Create Character' />
      </form>
    )
  }
}


export default CharacterForm

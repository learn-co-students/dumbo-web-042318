/*eslint-disable no-unused-vars*/
class StarWarsCharacter {
  constructor({ name, species, homeworld }) {
    this.name = name;
    this.species = species;
    this.homeworld = homeworld;
    this.htmlEl = this.htmlEl.bind(this);
  }

  htmlEl() {
    return `<div><h2>${this.name}</h2><p>Species: ${this.species.join(', ')}</p><p>Homeworld: ${this.homeworld}</div>`;
  }
}

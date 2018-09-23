import { attributes } from './constants'

global.character = {
  attributes: {
    // bravery: 10,
    // intelligence: 10,
    // intuition: 10,
    // charisma: 10,
    // dexterity: 10,
    // agility: 10,
    // konstitution: 10,
    // strength: 10
  }
}

attributes.forEach(({ name }) => {
  global.character.attributes[name] = localStorage.getItem(name) || 10
})

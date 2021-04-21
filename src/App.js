import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [
        {
          id: 'qbs1',
          name: 'Frankenstein'
        },
        {
          id: 'sdr2',
          name: 'Dracula'
        },
        {
          id: 'amd3',
          name: 'Zombie'
        }
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default App

import React, { useState } from 'react'
import './App.css'
import Menu from './Menu'
import exercises from './exercises.json'
import Workout from './Workout'

function App () {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button className='MenuButton' onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          Menu
        </button>
      </header>
      <Menu open={showMenu} closeMenu={() => setShowMenu(false)} exercises={exercises} />
      <div className='App-main'>
        <Workout exercises={exercises} />
      </div>
    </div>
  )
}

export default App

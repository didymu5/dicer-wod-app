import React, { Fragment, useState } from 'react'

import './Menu.css'
function Menu ({ ...props }) {  
  let { open, closeMenu, exercises } = props
  return (
    <Fragment>
      {open && (
        <div className='AppMenu'>
        <button className="CloseMenu" onClick={closeMenu}>X</button>
          <h3>Dicer Workout App</h3>
          <div className='menu-list'></div>
        </div>
      )}
    </Fragment>
  )
}

export default Menu

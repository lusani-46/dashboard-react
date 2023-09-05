import React from 'react'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <div  className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <div className='icon'/>
        </div>
    </header>
  )
}

export default Header

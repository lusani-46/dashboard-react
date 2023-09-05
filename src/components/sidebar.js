import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/pic.png' ; 

function Sidebar() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <span className='icon close_icon' onClick={handleSidebarToggle}>X</span>
      </div>

      <div className='logo'>
        <img src={logo}alt="" />
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard">
            <div className='icon'/> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/create">
            <div className='icon'/> Create
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/questionnaire">
            <div className='icon'/> Questionnaire
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

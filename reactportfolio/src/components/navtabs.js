import React from 'react';
import '../css/nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav'>
    <ul className="nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'active' : 'inactive'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'active' : 'inactive'}
        >
          Resume 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'active' : 'inactive'}
        >
          Portfolio 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'active' : 'inactive'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
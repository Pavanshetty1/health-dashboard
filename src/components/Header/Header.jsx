import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
     

      <div className="search-notify">
        <input type="text" placeholder="Search..." className="search-bar" />
        <span className="icon notification">🔔</span>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img src="/src/assets/images/avatar.jpg" alt="User" className="avatar" />
          <span className="username">Dr. Smith</span>
        </div>
        <button className="add-btn">+</button>
      </div>
    </header>
  );
};

export default Header;

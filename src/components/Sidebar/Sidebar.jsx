
import React from 'react';
import './Sidebar.css';
import { navigationLinks } from '../../data/navigationLinks';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="highlights">Healthcare</h2>
      <h5 className="sidebar-title">General</h5>
      <ul className="nav-links">
        {navigationLinks.map((item, index) => (
          <li key={index} className="nav-item">
            <span className="icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

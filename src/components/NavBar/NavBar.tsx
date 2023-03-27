import React from 'react';
import { NavLink } from 'react-router-dom';

import './navBar.scss';

export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'unactiveLink'
            }
          >
            Phase One
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/phase2"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'unactiveLink'
            }
          >
            Phase Two
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

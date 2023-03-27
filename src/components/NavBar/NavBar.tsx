import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Phase One</NavLink>
        </li>
        <li>
          <NavLink to="/phase2">Phase Two</NavLink>
        </li>
      </ul>
    </div>
  );
}

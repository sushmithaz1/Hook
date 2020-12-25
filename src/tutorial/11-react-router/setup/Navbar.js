import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/UseStateEx">UseStateEx</Link>
        </li>
        <li>
            <Link to="/UseEffectEx">UseEffectEx</Link>
        </li>
        <li>
            <Link to="/People">People</Link>
        </li>
        <li>
            <Link to="/ConditionRenderingEx">ConditionRenderingEx</Link>
        </li>
        <li>
          <Link to="/UseContextEx">UseContextEx</Link>
        </li>
        <li>
          <Link to="/UseRefEx">UseRefEx</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

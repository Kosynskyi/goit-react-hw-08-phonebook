import React from 'react';
// import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/" end> */}
          <p>Home</p>
          {/* </Link> */}
        </li>
        <li>
          <p>Contacts</p>
          {/* <Link to="/contacts">Contacts</Link> */}
        </li>
      </ul>
    </nav>
  );
};

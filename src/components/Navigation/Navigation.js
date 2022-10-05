import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

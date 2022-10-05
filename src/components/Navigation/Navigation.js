// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

import { List, Item, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <List>
        <Item>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </Item>
        {isLoggedIn && (
          <Item>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </Item>
        )}
      </List>
    </nav>
  );
};

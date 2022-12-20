import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { FaHome } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';

import { List, Item, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <List>
        <Item>
          <StyledLink to="/" end>
            <FaHome size={35} />
          </StyledLink>
        </Item>
        {isLoggedIn && (
          <Item>
            <StyledLink to="/contacts">
              <IoMdContacts size={35} />
            </StyledLink>
          </Item>
        )}
      </List>
    </nav>
  );
};

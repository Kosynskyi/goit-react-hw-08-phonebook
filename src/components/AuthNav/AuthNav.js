import { List, Item, LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <Item>
        <LinkStyled to="/register">Registration</LinkStyled>
      </Item>
      <Item>
        <LinkStyled to="/login">Login</LinkStyled>
      </Item>
    </List>
  );
};

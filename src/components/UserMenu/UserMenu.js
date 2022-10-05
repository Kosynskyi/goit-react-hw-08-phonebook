import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper, Text, Span, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>
        Welcome, <Span>{name}</Span>
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </Wrapper>
  );
};

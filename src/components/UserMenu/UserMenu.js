import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

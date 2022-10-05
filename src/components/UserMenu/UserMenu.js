import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

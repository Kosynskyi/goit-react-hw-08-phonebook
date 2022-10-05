import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Registration</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

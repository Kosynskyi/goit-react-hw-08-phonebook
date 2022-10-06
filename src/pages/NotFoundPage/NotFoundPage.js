import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <p>
        Page was not found, welcome to <Link to="/">Home page</Link>!
      </p>
    </div>
  );
};

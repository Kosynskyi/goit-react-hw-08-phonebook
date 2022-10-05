// import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';

import { getToken } from '../../redux/auth/authSelectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const token = useSelector(getToken);

  return (
    <Header>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

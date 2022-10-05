import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';

import { getToken } from '../../redux/auth/authSelectors';

export const AppBar = () => {
  const token = useSelector(getToken);

  return (
    <>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </>
  );
};

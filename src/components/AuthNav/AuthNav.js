import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact>
        Registration
      </NavLink>
      <NavLink to="/login" exact>
        Log in
      </NavLink>
    </div>
  );
};

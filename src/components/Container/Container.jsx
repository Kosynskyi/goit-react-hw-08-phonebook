import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyles, Title } from './Container.styled';

export const Container = ({ title, children }) => {
  return (
    <ContainerStyles>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerStyles>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

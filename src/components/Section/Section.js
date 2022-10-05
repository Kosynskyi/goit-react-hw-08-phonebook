import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyles, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

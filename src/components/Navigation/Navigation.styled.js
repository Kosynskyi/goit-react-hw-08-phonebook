import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: black;
  background-color: rgba(1, 157, 255, 1);
  width: 100px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  margin-right: 20px;
  border-radius: 6px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: scale(1.2);
  }
  &.active {
    color: black;
  }
`;

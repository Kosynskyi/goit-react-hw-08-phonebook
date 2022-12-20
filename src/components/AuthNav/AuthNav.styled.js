import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
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

export const LinkStyled = styled(Link)`
  min-width: 150px;
  padding: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.awesome};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  transition: 500ms;
  text-decoration: none;
  background-color: #141414;

  &.active {
    color: ${p => p.theme.colors.red};
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #8500ff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }
  &:hover {
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #8500ff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
  }
  &::after {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-left: 2px solid #8500ff;
    border-top: 2px solid #8500ff;
    top: 0;
    left: 0;
    border-radius: 6px 0 0 0;
    transition: 500ms;
  }
  &::before {
    content: '';
    width: 25px;
    height: 25px;
    position: absolute;
    border-right: 2px solid #8500ff;
    border-bottom: 2px solid #8500ff;
    right: 0;
    bottom: 0;
    border-radius: 0 0 6px 0;
    transition: 500ms;
  }
  &:hover::after,
  &:hover::before {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: ${p => p.theme.radii.normal};
  }
`;

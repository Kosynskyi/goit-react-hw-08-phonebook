import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 300px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.effect};
  box-shadow: 0 0 50px #8500ff;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  width: 300px;
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.awesome};
  border: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.white};
  transition: 500ms;
  text-decoration: none;
  background-color: #141414;
  /* border: ${p => p.theme.borders.none}; */

  &:hover {
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #8500ff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
    transform: scale(1.1);
    color: ${p => p.theme.colors.red};
    cursor: pointer;
  }
`;

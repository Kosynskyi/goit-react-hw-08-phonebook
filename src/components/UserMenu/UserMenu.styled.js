import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* width: 30%; */
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 400;
  margin-right: ${p => p.theme.space[5]}px;
`;

export const Span = styled.span`
  font-size: 25px;
  font-weight: 700;
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
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  transition: 500ms;
  text-decoration: none;
  background-color: #141414;

  &:hover {
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 50px #8500ff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
    transform: scale(1.1);
    color: ${p => p.theme.colors.red};
    cursor: pointer;
  }
`;

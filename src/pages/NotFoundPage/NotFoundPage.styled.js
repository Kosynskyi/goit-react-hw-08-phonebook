import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
`;

export const StyledBackHome = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.white};
  & > svg {
    margin-right: ${p => p.theme.space[4]}px;
  }
  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

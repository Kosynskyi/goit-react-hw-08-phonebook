import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

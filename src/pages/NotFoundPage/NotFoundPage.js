import { FcHome } from 'react-icons/fc';
import { Text, StyledBackHome, Wrapper } from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <Text>404</Text>
      <Text>page not found :(</Text>
      <StyledBackHome to="/">
        <FcHome />
        Back to Home
      </StyledBackHome>
    </Wrapper>
  );
};

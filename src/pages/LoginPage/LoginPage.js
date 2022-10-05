import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Container } from 'components/Container';
import { FormWrapper, Label, Input, Button } from './LoginPage.styled';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Log in</Button>
      </FormWrapper>
    </Container>
  );
};

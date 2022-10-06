import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Container } from 'components/Container';
import { FormWrapper, Label, Input, Button } from './RegisterPage.styled';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    console.log('send form');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
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
        <Button type="submit">Register</Button>
      </FormWrapper>
    </Container>
  );
};

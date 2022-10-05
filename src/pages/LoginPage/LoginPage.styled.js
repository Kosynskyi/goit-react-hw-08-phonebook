import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 265px;
  padding: 10px 15px;
  font-size: 20px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px;
  font-size: 20px;
  border-radius: 3px;
  cursor: pointer;
`;

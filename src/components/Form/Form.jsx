import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/contactsOperations';

import { getContacts } from '../../redux/contacts/contacts-selector';
import { useDispatch, useSelector } from 'react-redux';
import { FormWrapper, Label, Input, Button } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const findRepeatContact = contactsList.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (!newContact.name || !newContact.number) {
      return alert('Please, fill in all the data');
    }

    if (findRepeatContact) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWrapper>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

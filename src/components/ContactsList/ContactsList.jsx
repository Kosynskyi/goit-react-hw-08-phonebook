import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from '../../redux/filter/filter-selector';
import { Item, List, Text, Button } from './ContactsList.styled';

const ContactItem = ({ name, tel, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>{name}:</Text>
      <Text>{tel}</Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

export const ContactsList = () => {
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContacts = () => {
    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  return (
    <List>
      {filterContacts().map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} tel={phone} />
      ))}
    </List>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

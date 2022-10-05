import PropTypes from 'prop-types';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from '../../redux/filter/filter-selector';
import { Item, List, Text, Button } from './ContactsList.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>

      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
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
      {filterContacts().map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// import * as React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';

// export default function IconLabelButtons() {
//   return (
//     <Stack direction="row" spacing={2}>
// <Button variant="outlined" startIcon={<DeleteIcon />}>
//   Delete
// </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//     </Stack>
//   );
// }

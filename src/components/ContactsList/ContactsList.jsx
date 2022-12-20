import PropTypes from 'prop-types';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from '../../redux/filter/filter-selector';
import { List, Item, Text, Button } from './ContactsList.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <Text>
          {name}: {number}
        </Text>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          <MdDelete size={16} />
        </Button>
      </Item>
    </>
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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.red' }}>
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

import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { Button, ListItem, Divider, List, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from '../../redux/filter/filter-selector';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItem style={{ width: '900px' }}>
        <Typography
          variant="h5"
          gutterBottom
          component="p"
          sx={{ mr: '30px', width: '250px' }}
        >
          {name}:
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="p"
          sx={{ mr: '30px', width: '150px' }}
        >
          {number}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          sx={{ width: '200px' }}
        >
          Delete
        </Button>
      </ListItem>
      <Divider variant="fullWidth" />
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

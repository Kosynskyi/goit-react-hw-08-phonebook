import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import {
  getIsLoading,
  getError,
  getContacts,
} from '../../redux/contacts/contacts-selector';
// import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelectors';
import { ContactsList } from '../../components/ContactsList';
import { fetchCurrentUser } from '../../redux/auth/authOperations';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const name = useSelector(getUserName);
  //   const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container title="Phonebook">
          <Form />
        </Container>
        <Container title="Contacts">
          <Filter />

          {isLoading && contactList.length === 0 ? (
            <h1>LOADING..</h1>
          ) : (
            <ContactsList />
          )}
        </Container>
      </Section>
      {error && <p>{error}</p>}
    </>
  );
};

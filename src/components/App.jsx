// ================GLOBAL IMPORTS======================
import { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// ==================PAGES=============================
// import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
// import { ContactsPage } from '../pages/ContactsPage';

// import { fetchContacts } from '../redux/contacts/contactsOperations';
// import { Form } from './Form';
// ====================COMPONENTS=============================
import { Section } from './Section';
import { Container } from './Container';
import { Header } from './Header';
import { UserMenu } from './UserMenu';
// ====================VARIABLES=============================
import { getIsLoggedIn, getUserName } from '../redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { ContactsList } from './ContactsList';
// import { Filter } from './Filter';
// import {
//   getIsLoading,
//   getError,
//   getContacts,
// } from '../redux/contacts/contacts-selector';

export const App = () => {
  const dispatch = useDispatch();
  // const contactList = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const name = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <Header />
          {isLoggedIn && name && <UserMenu />}

          <RegisterPage />
          <LoginPage />
          {/* 
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/contacts" component={ContactsPage} />
          </Routes> */}

          {/* <Section>
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
      {error && <p>{error}</p>} */}
        </Container>
      </Section>
    </>
  );
};

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import TodosView from './views/TodosView';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Container from './components/Container';
// import { authOperations } from './redux/auth';

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       <AppBar />

//       <Switch>
//         <Route exact path="/" component={HomeView} />
//         <Route path="/register" component={RegisterView} />
//         <Route path="/login" component={LoginView} />
//         <Route path="/todos" component={TodosView} />
//       </Switch>
//     </Container>
//   );
// }

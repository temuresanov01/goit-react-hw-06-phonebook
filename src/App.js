import s from './App.css';
import React, { useEffect, useState } from 'react';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = e => setFilter(e.currentTarget.value);
  const onFormSubmit = contact => {
    setContacts(state => [contact, ...state]);
  };
  const onDeleteButtonClick = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Section title={'Phonebook'}>
      <ContactForm contacts={contacts} onSubmitFunction={onFormSubmit} />

      <Section title={'Contacts'}>
        <Filter value={filter} onChange={onFilterChange} />

        <ContactList
          filteredContacts={getVisibleContact()}
          handleDelete={onDeleteButtonClick}
        />
      </Section>
    </Section>
  );
}

export default App;

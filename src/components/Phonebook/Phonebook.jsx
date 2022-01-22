import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as storage from '../../services/LocalStorage';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { addContact, delContact } from '../../redux/contacts/contactsActions';
import s from './Phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const addNewContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (isDuplicate) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
  };

  const handleDelete = idToDelete => {
    dispatch(delContact(idToDelete));
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <div>
      <div>
        <h1 className={s.sectionTitle}>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />
        <h2 className={s.sectionTitle}>Contacts</h2>
        <Filter />
      </div>
      {filterContacts.length > 0 && (
        <ContactList
          filterContacts={filterContacts}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Phonebook;

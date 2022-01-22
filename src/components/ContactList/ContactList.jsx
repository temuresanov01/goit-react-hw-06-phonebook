import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import s from './ContactList.module.css';

function ContactList({ filterContacts, handleDelete }) {
  return (
    <div className={s.mainContainer}>
      <ul>
       <p className={s.ContactList}>Contact List</p>
      {filterContacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul></div>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;

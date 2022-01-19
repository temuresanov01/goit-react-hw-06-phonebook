import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, handleDelete }) => {
  return (
    <div className={s.mainContainer}>
      <ul>
        <p className={s.ContactList}>Contact List</p>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={s.newContact} key={id}>
            <p className={s.newContactName}>
              {name} : {number}
            </p>

            <button
              className={s.btn}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;

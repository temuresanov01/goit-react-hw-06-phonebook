import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem(props) {
  return (
    <li className={s.newContact}>
      <p className={s.newContactName}> {props.contact.name}</p>
      <p className={s.newContactName}> {props.contact.number}</p>
      <button
         className={s.btn}
        type="button"
        onClick={() => props.handleDelete(props.contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  handleDelete: PropTypes.func,
};

export default ContactListItem;

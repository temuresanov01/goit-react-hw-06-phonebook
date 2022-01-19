import { useState } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmitFunction, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const saveInputNumberToState = e => setNumber(e.currentTarget.value);
  const saveInputNameToState = e => setName(e.currentTarget.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    contacts.forEach(element => {
      if (element.name.includes(contact.name)) {
        contact.name = null;
        return alert('contact is already in the directory');
      }
    });
    if (contact.name === null) {
      reset();
      return;
    }
    onSubmitFunction(contact);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.mainForm} onSubmit={handleSubmitForm}>
      <div className={s.inputContainer}>
        <label className={s.labelName}>Name</label>
        <input
          onChange={saveInputNameToState}
          type="text"
          name="name"
          className={s.inputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Rosie Simpson,  d'Artagnan и т. п."
          required
          placeholder="Enter Name"
        ></input>
      </div>

      <div className={s.inputContainer}>
        <label className={s.labelName}>Number</label>
        <input
          onChange={saveInputNumberToState}
          type="tel"
          name="number"
          className={s.inputName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="Enter Number"
        />
      </div>
      <button type="submit" className={s.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmitFunction: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

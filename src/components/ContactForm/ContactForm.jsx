import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number, id: nanoid() });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.mainForm}>
        <div className={s.inputContainer}>
          <label className={s.labelName} htmlFor="text">
            Name
          </label>
          <input
            className={s.inputName}
            label="last"
            type="text"
            name="name"
            id="text"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Rosie Simpson,  d'Artagnan и т. п."
            required
            placeholder="Enter Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={s.inputContainer}>
          <label className={s.labelName} htmlFor="tel">
            Number
          </label>
          <input
            className={s.inputName}
            type="tel"
            name="number"
            id="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Enter Number"
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button className={s.buttonAddContact} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;

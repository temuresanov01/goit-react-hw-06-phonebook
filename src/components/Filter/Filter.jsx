import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={s.mainContainer}>
       <div className={s.inputContainer}>
         <label className={s.labelName} htmlFor="filter">
           Find contact by name
           </label>
         
      <input
       className={s.inputName}
        type="text"
        name="filter"
        id="filter"
        value={filter}
        placeholder="Filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      /></div>
    </div>
  );
}

export default Filter;

import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact, changeFilter } from './contactsActions';
import { combineReducers } from 'redux';

const itemsReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  builder => {
    builder
      .addCase(addContact, (state, action) => [...state, action.payload])
      .addCase(delContact, (state, action) =>
        state.filter(items => items.id !== action.payload),
      );
  },
);

const filterReducer = createReducer('', builder => {
  builder.addCase(changeFilter, (_, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

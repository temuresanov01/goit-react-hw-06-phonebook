import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add');
const delContact = createAction('contact/del');
const changeFilter = createAction('contact/filter');

export { addContact, delContact, changeFilter };

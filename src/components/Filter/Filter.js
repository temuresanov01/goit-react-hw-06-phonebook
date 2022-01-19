import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, filterContacts }) => {
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
          value={filter}
          placeholder="Filter"
          onChange={filterContacts}
        ></input>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

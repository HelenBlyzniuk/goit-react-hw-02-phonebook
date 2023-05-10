import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        className="filterField"
        value={value}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

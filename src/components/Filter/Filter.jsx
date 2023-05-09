import React from 'react';

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

import PropTypes from 'prop-types';

import { FilterInput } from './Filter.styled';

export function Filter({ filterValue, onFilterChange }) {
  function handleFilterChange({ currentTarget }) {
    onFilterChange(currentTarget.value);
  }

  return (
    <FilterInput
      type="text"
      name="filter"
      onChange={handleFilterChange}
      value={filterValue}
    ></FilterInput>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

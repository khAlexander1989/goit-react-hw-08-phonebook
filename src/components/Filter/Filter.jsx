import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FilterField, FilterInput, FilterLabel } from './Filter.styled';

export function Filter({ filterValue, onFilterChange }) {
  const filterInputId = nanoid();

  function handleFilterChange({ currentTarget }) {
    onFilterChange(currentTarget.value);
  }

  return (
    <FilterField>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filterValue}
      />
    </FilterField>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

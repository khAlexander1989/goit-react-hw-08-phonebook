import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { FilterField, FilterInput, FilterLabel } from './Filter.styled';
import { setNameFilter } from 'redux/filtersSlice';
import { getFilters } from 'redux/selectors';

export function Filter() {
  const filterInputId = nanoid();

  const dispatch = useDispatch();
  const nameFilter = useSelector(getFilters).name;

  return (
    <FilterField>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        onChange={({ currentTarget: { value } }) =>
          dispatch(setNameFilter(value))
        }
        value={nameFilter}
      />
    </FilterField>
  );
}

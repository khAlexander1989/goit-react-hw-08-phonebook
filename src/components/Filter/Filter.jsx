import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { FilterField, FilterInput, FilterLabel } from './Filter.styled';
import { setNameFilter } from 'redux/filters/slice';
import { selectFilters } from 'redux/filters/selectors';

export default function Filter() {
  const filterInputId = nanoid();

  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilters).name;

  return (
    <FilterField>
      <FilterLabel htmlFor={filterInputId}>Find contact by name</FilterLabel>
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

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/filter/filter-selector';
import { filterContacts } from '../../redux/filter/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilteredContacts);

  const handleChange = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};

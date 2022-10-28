import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter, remove }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('none');

  const handleSelection = (e) => {
    setCategory(e.target.value);
    e.target.nextSibling.value = '';
    dispatch(remove());
  };
  
  const handleChange = (e) => {
    if (category !== 'none') {
      dispatch(filter(category, e.target.value));
    }
  };

  return (
    <div className={s.filter}>
      <p>Search By:</p>
      <select className={s.options} onChange={(e) => handleSelection(e)}>
        <option value="none">No-Filters</option>
        <option value="title">Title</option>
        <option value="year">Year</option>
        <option value="imDbRating">Rating</option>
      </select>
      <input className={s.search} type="text" onChange={(e) => handleChange(e)}/>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

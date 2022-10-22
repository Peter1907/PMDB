/* eslint-disable*/
import { useState } from 'react';
import s from './Filter.module.css';

export default function Filter() {
  const [category, setCategory] = useState('none');

  const handleSelection = (e) => {
    setCategory(e.target.value);
    e.target.nextSibling.value = '';
    console.log('working');
  };

  const handleChange = (e) => {
    if (category !== 'none') {
      console.log('working');
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
      <input className={s.search} type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

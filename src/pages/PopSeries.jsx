/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter/Filter';
import {
  filterPopSeries,
  getPopSeries,
  getStoredPopSeries,
  removePopSeriesFilter,
} from '../components/Redux/pop-series/pop-series';
import s from './List.module.css';

export default function PopSeries() {
  const saveIcon = ('./assets/dark-add.png');
  const starIcon = ('./assets/star.png');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.popSeries);
  const storedData = localStorage.getItem('POP_SERIES');

  const getData = () => (storedData ? dispatch(getStoredPopSeries()) : dispatch(getPopSeries()));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.topMovies}>
      <h1>Top Series</h1>
      <h3>PMDB&apos;s Top 250 Series &#38; Shows as per Ratings</h3>
      <Filter filter={filterPopSeries} remove={removePopSeriesFilter} />
      <div className={s.movieList}>
        {Data.map((item, index) => (
          <div key={index} className={s.movie}>
            <img className={s.poster} src={item.image} alt="series poster" />
            <p className={s.index}>{`${index + 1} . `}</p>
            <p className={s.title}>{item.fullTitle}</p>
            <div className={s.ratingContainer}>
              <p className={s.rating}>
                <img src={starIcon} className={s.playButton} alt="start shaped icon" />
                {item.imDbRating} ({item.imDbRatingCount})
              </p>
            </div>
            <img className={s.saveTag} src={saveIcon} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter/Filter';
import {
  filterPopMovies,
  getPopMovies,
  getStoredPopMovies,
  removePopMoviesFilter,
} from '../components/Redux/pop-movies/pop-movies';
import s from './List.module.css';

export default function PopMovies() {
  const saveIcon = ('./assets/dark-add.png');
  const starIcon = ('./assets/star.png');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.popMovies);
  const storedData = localStorage.getItem('POP_MOVIES');

  const getData = () => (storedData ? dispatch(getStoredPopMovies()) : dispatch(getPopMovies()));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.topMovies}>
      <h1>Top Movies</h1>
      <h3>PMDB&apos;s Top 250 Movies as per Ratings</h3>
      <Filter filter={filterPopMovies} remove={removePopMoviesFilter} />
      <div className={s.movieList}>
        {Data.map((item, index) => (
          <div className={s.movie}>
            <img className={s.poster} src={item.image} alt="movie poster" />
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

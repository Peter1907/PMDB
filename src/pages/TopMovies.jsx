/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter/Filter';
import {
  filterTopMovies,
  getStoredTopMovies,
  getTopMovies,
  removeTopMoviesFilter
} from '../components/Redux/top-movies/top-movies';
import s from './List.module.css';

export default function TopMovies() {
  const saveIcon = ('./assets/dark-add.png');
  const starIcon = ('./assets/star.png');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.topMovies);
  const storedData = localStorage.getItem('TOP_MOVIES');

  const getData = () => (storedData ? dispatch(getStoredTopMovies()) : dispatch(getTopMovies()));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.topMovies}>
      <h1 className={s.header}>Top Movies</h1>
      <h3 className={s.subHeader}>PMDB&apos;s Top 250 Movies as per Ratings</h3>
      <Filter filter={filterTopMovies} remove={removeTopMoviesFilter} />
      <div className={s.movieList}>
        {Data.map((item, index) => (
          <div key={index} className={s.movie}>
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import {
  filterTopMovies,
  getStoredTopMovies,
  getTopMovies,
  removeTopMoviesFilter
} from '../components/Redux/top-movies/top-movies';
import s from './List.module.css';

export default function TopMovies() {
  const saveIcon = ('./assets/add.png');
  const starIcon = ('./assets/star.png');
  const background = ('./assets/img.jpg');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.topMovies);
  const storedData = sessionStorage.getItem('TOP_MOVIES');

  useEffect(() => {
    (storedData ? dispatch(getStoredTopMovies()) : dispatch(getTopMovies()));
    window.scrollTo(0, 0);
  }, [dispatch, storedData]);

  return (
    <div className={s.topMovies}>
      <img className={s.background} src={background} alt="movie disks" />
      <h1 className={s.header}>Top Movies</h1>
      <h3 className={s.subHeader}>PMDB&apos;s Top 250 Movies as per Ratings</h3>
      <Filter filter={filterTopMovies} remove={removeTopMoviesFilter} />
      <div className={s.movieList}>
        {Data.map((item, index) => (
          <div key={index} className={s.movie}>
            <div className={s.posterContainer}>
              <img className={s.poster} src={item.image} alt="movie poster" />
            </div>
            <div className={s.textContainer}>
              <div className={s.titleContainer}>
                <p className={s.index}>{`${index + 1}.`}</p>
                <Link className={s.title} to={`/item-details/${item.id}`}>
                  <p>{item.fullTitle}</p>
                </Link>
              </div>
              <div className={s.ratingContainer}>
                <p className={s.rating}>
                  <img src={starIcon} className={s.playButton} alt="star shaped icon" />
                  {item.imDbRating} ({item.imDbRatingCount})
                </p>
              </div>
            </div>
            <img className={s.saveTag} src={saveIcon} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}

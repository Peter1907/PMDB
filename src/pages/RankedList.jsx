import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import {
  filterTopMovies,
  getStoredTopMovies,
  getTopMovies,
  removeTopMoviesFilter,
} from '../components/Redux/top-movies/top-movies';
import {
  getTopSeries,
  getStoredTopSeries,
  filterTopSeries,
  removeTopSeriesFilter,
} from '../components/Redux/top-series/top-series';
import {
  getPopSeries,
  getStoredPopSeries,
  filterPopSeries,
  removePopSeriesFilter,
} from '../components/Redux/pop-series/pop-series';
import {
  getPopMovies,
  getStoredPopMovies,
  filterPopMovies,
  removePopMoviesFilter,
} from '../components/Redux/pop-movies/pop-movies';
import s from './List.module.css';
import ImgPlaceholder from '../components/ImgPlaceholder/ImgPlaceholder';

export default function RankedList({ type }) {
  const saveIcon = '/assets/add.png';
  const starIcon = '/assets/star.png';
  const background = '/assets/img.jpg';
  const dispatch = useDispatch();
  const options = {
    'top-movies': {
      header: 'Top Movies',
      subHeader: 'Top 250 Movies as per Ratings',
      state: useSelector((state) => state.topMovies),
      storageKey: 'TOP_MOVIES',
      get: getTopMovies,
      getStored: getStoredTopMovies,
      filter: filterTopMovies,
      removeFilter: removeTopMoviesFilter,
    },
    'top-series': {
      header: 'Top Series',
      subHeader: 'Top 250 Series & Shows as per Ratings',
      state: useSelector((state) => state.topSeries),
      storageKey: 'TOP_SERIES',
      get: getTopSeries,
      getStored: getStoredTopSeries,
      filter: filterTopSeries,
      removeFilter: removeTopSeriesFilter,
    },
    'pop-movies': {
      header: 'Popular Movies',
      subHeader: "PMDB's Most Popular Movies",
      state: useSelector((state) => state.popMovies),
      storageKey: 'POP_MOVIES',
      get: getPopMovies,
      getStored: getStoredPopMovies,
      filter: filterPopMovies,
      removeFilter: removePopMoviesFilter,
    },
    'pop-series': {
      header: 'Popular Series',
      subHeader: "PMDB's Most Popular Series & Shows",
      state: useSelector((state) => state.popSeries),
      storageKey: 'POP_SERIES',
      get: getPopSeries,
      getStored: getStoredPopSeries,
      filter: filterPopSeries,
      removeFilter: removePopSeriesFilter,
    },
  };
  const Data = options[type].state;
  const storedData = sessionStorage.getItem(options[type].storageKey);

  useEffect(() => {
    storedData ? dispatch(options[type].getStored()) : dispatch(options[type].get());
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const redirect = (url) => {
    window.location.replace(window.location.origin + url);
  };

  return (
    <div className={s.listPage}>
      <img className={s.background} src={background} alt="movie disks" />
      <h1 className={s.header}>{options[type].header}</h1>
      <h3 className={s.subHeader}>{options[type].subHeader}</h3>
      <Filter filter={options[type].filter} remove={options[type].removeFilter} />
      <div className={s.rankedList}>
        {Data.map((item, index) => (
          <div key={index} className={s.item}>
            <div className={s.posterContainer}>
              <ImgPlaceholder src={item.image} alt="poster" orientation="v" />
            </div>
            <div className={s.textContainer}>
              <div className={s.titleContainer}>
                <p className={s.index}>{`${index + 1}.`}</p>
                <Link
                  className={s.title}
                  to={`/item-details/${item.id}`}
                  onClick={() => redirect(`/item-details/${item.id}`)}
                >
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

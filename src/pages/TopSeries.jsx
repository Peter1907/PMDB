/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import {
  filterTopSeries,
  getStoredTopSeries,
  getTopSeries,
  removeTopSeriesFilter,
} from '../components/Redux/top-series/top-series';
import s from './List.module.css';

export default function TopSeries() {
  const saveIcon = ('./assets/add.png');
  const starIcon = ('./assets/star.png');
  const background = ('./assets/img.jpg');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.topSeries);
  const storedData = localStorage.getItem('TOP_SERIES');

  const getData = () => (storedData ? dispatch(getStoredTopSeries()) : dispatch(getTopSeries()));

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.topSeries}>
      <img className={s.background} src={background} alt="movie disks" />
      <h1 className={s.header}>Top Series</h1>
      <h3 className={s.subHeader}>PMDB&apos;s Top 250 Series &#38; Shows as per Ratings</h3>
      <Filter filter={filterTopSeries} remove={removeTopSeriesFilter} />
      <div className={s.seriesList}>
        {Data.map((item, index) => (
          <div key={index} className={s.series}>
            <img className={s.poster} src={item.image} alt="series poster" />
            <p className={s.index}>{`${index + 1} . `}</p>
            <Link className={s.title} to={`/item-details/${item.id}`}>
              <p>{item.fullTitle}</p>
            </Link>
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
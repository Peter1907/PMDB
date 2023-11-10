import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import {
  filterPopSeries,
  getPopSeries,
  getStoredPopSeries,
  removePopSeriesFilter,
} from '../components/Redux/pop-series/pop-series';
import s from './List.module.css';

export default function PopSeries() {
  const saveIcon = ('./assets/add.png');
  const starIcon = ('./assets/star.png');
  const background = ('./assets/img.jpg');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.popSeries);
  const storedData = sessionStorage.getItem('POP_SERIES');

  useEffect(() => {
    (storedData ? dispatch(getStoredPopSeries()) : dispatch(getPopSeries()));
    window.scrollTo(0, 0);
  }, [dispatch, storedData]);

  return (
    <div className={s.popSeries}>
      <img className={s.background} src={background} alt="movie disks" />
      <h1 className={s.header}>Popular Series</h1>
      <h3 className={s.subHeader}>PMDB&apos;s Most Popular Series &#38; Shows</h3>
      <Filter filter={filterPopSeries} remove={removePopSeriesFilter} />
      <div className={s.seriesList}>
        {Data.map((item, index) => (
          <div key={index} className={s.series}>
            <div className={s.posterContainer}>
              <img className={s.poster} src={item.image} alt="series poster" />
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

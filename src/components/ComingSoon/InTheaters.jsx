/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInTheaters, getStoredInTheaters } from '../Redux/in-theaters/in-theaters';
import { getStoredTrailer, getTrailer } from '../Redux/trailer/trailer';
import s from './InTheaters.module.css';

export default function InTheaters() {
  const playIcon = ('./assets/play.png');
  const starIcon = ('./assets/star.png');
  const saveIcon = ('./assets/add.png');
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.inTheaters);
  const modData = Data.slice(1, 4);
  const DATA = localStorage.getItem('IN_THEATERS');

  const getData = () => (DATA ? dispatch(getStoredInTheaters()) : dispatch(getInTheaters()));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.inTheaters}>
      <h1>In Theaters Now!</h1>
      <div className={s.block}>
        {(Data.length > 0)
          && (<div className={s.view}>
            <Thumbnail id={Data[0].id} />
            <div className={s.mainBlock}>
              <div className={s.imgContainer}>
                <img className={s.saveTag} src={saveIcon} alt="#" />
                <img src={Data[0].image} className={s.mainPoster} alt="poster" />
              </div>
              <div className={s.textContainer}>
                <h2>{Data[0].fullTitle}</h2>
                <p className={s.plot}>{`${(Data[0].plot).substring(0, 150)}...`}</p>
                <p className={s.mainPlayTrailer}>
                  <img src={playIcon} className={s.mainPlayButton} alt="play button" />
                  watch trailer
                </p>
              </div>
            </div>
          </div>)}
        <div className={s.next}>
          {modData.map((item) => (
            <div className={s.movie}>
              <img src={item.image} className={s.poster} alt="poster" />
              <div className={s.text}>
                <h3 className={s.title}>{item.title}</h3>
                <p><strong>Genre:</strong> {item.genres}</p>
                <p className={s.rating}>
                  <img src={starIcon} className={s.playButton} alt="start shaped icon" />
                  {item.imDbRating} ({item.imDbRatingCount})
                </p>
                <p className={s.playTrailer}>
                  <img src={playIcon} className={s.playButton} alt="play button" />
                  watch<br/> trailer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Thumbnail = ({ id }) => {
  const dispatch = useDispatch();
  const storedTrailer = localStorage.getItem(id);
  const trailerInfo = useSelector((state) => state.trailer);

  const getData = () => {
    (storedTrailer) ? dispatch(getStoredTrailer(id)) : dispatch(getTrailer(id))
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <img src={trailerInfo.thumbnailUrl} alt="thumbnail" className={s.thumbnail} />
    </React.Fragment>
  );
};

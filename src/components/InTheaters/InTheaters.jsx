import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getInTheaters,
  getStoredInTheaters,
  updateInTheaters,
} from '../Redux/in-theaters/in-theaters';
import Thumbnail from '../Thumbnail/Thumbnail';
import s from './InTheaters.module.css';
import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

export default function InTheaters() {
  const playIcon = './assets/play.png';
  const starIcon = './assets/star.png';
  const saveIcon = './assets/add.png';
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.inTheaters);
  const DATA = sessionStorage.getItem('IN_THEATERS');

  useEffect(() => {
    DATA ? dispatch(getStoredInTheaters()) : dispatch(getInTheaters());
  }, [DATA, dispatch]);

  const [count, setCount] = useState(7);
  const handleLoad = (i, event) => {
    dispatch(updateInTheaters(i));
    if (i === 7) event.target.parentNode.style.overflowY = 'scroll';
  };

  const redirect = (url) => {
    window.location.replace(window.location.origin + url);
  };

  return (
    <div id="in-theaters" className={s.inTheaters}>
      <h1>In Theaters Now!</h1>
      {Data.length > 0 && (
        <div className={s.block}>
          <div className={s.view}>
            <div className={s.thumbnailContainer}>
              <div className={s.mainBlock}>
                <div className={s.mainImgContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <ImgPlaceholder key={Data[0].id} src={Data[0].image} alt="poster" orientation="v" />
                </div>
                <div className={s.textContainer}>
                  <Link onClick={() => redirect(`/item-details/${Data[0].id}`)}>
                    <h2 className={s.mainTitle}>{Data[0].fullTitle}</h2>
                  </Link>
                  <p className={s.plot}>{`${Data[0].plot.substring(0, 150)}...`}</p>
                  <p className={s.mainPlayTrailer}>
                    <img src={playIcon} className={s.mainPlayButton} alt="play button" />
                    watch trailer
                  </p>
                </div>
              </div>
              <Thumbnail id={Data[0].id} />
            </div>
          </div>
          <div className={s.next}>
            {Data[1].map((item, index) => (
              <div key={index} className={s.movie}>
                <div className={s.imgContainer}>
                  <ImgPlaceholder key={index} src={item.image} alt="poster" orientation="v" />
                </div>
                <div className={s.text}>
                  <Link onClick={() => redirect(`/item-details/${item.id}`)}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <p>
                    <strong>Genre:</strong> {item.genres}
                  </p>
                  <p className={s.rating}>
                    <img src={starIcon} className={s.playButton} alt="start shaped icon" />
                    {item.imDbRating} ({item.imDbRatingCount})
                  </p>
                  <p className={s.playTrailer}>
                    <img src={playIcon} className={s.playButton} alt="play button" />
                    watch
                    <br /> trailer
                  </p>
                </div>
              </div>
            ))}
            <button
              className={s.loadBtn}
              type="button"
              onClick={(event) => {
                handleLoad(count, event);
                setCount(count + 3);
              }}
            >
              Load more
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

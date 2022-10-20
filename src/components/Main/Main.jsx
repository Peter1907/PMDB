/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoredTopMovies, getTopMovies } from '../Redux/top-movies/top-movies';
import s from './Main.module.css';

export default function Main() {
  const logo = ('./assets/logo02.png');
  
  const dispatch = useDispatch();
  const DATA = localStorage.getItem('TOP_MOVIES');
  const Data = useSelector((state) => state.topMovies);
  const random = Math.floor(Math.random() * 247);
  const images = Data.slice(random, random + 2);

  const getData = () => (DATA ? dispatch(getStoredTopMovies()) : dispatch(getTopMovies()));

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={s.mainContainer}>
      <div className={s.sliderContainer}>
        <div className={s.imgContainer}>
          {images.map((item, id) => (
            <img key={id} id={`image-${id + 1}`} src={item.image} alt={images.title} />
          ))}
        </div>
        <div className={s.dotsContainer}>
          {images.map((item, id) => (
            <a key={id} href={`image-${id}`}> </a>
          ))}
        </div>
      </div>
      {/* <img src={image} alt="Movie Poster" className={s.background}/> */}
      <div className={s.gradient} />
      <div className={s.textBox}>
        <div className={s.title}>
          <img src={logo} alt="movie disk logo" />
          <div className={s.separator}>|</div>
          <h1>PMDB</h1>
        </div>
      </div>
      <div className={s.explore}>
        explore
        <p className={s.arrow}>&#8964;</p>
      </div>
    </div>
  );
}

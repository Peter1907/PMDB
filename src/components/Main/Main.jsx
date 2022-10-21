/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import { getPopMovies, getStoredPopMovies } from '../Redux/pop-movies/pop-movies';
import { getPopSeries, getStoredPopSeries } from '../Redux/pop-series/pop-series';
import { getStoredTopMovies, getTopMovies } from '../Redux/top-movies/top-movies';
import s from './Main.module.css';

const ScrollLink = Scroll.Link;

export default function Main() {
  const logo = ('./assets/logo02.png');

  const dispatch = useDispatch();
  const DATA = localStorage.getItem('TOP_MOVIES');
  const DATA2 = localStorage.getItem('POP_MOVIES');
  const DATA3 = localStorage.getItem('POP_SERIES');
  const Data = useSelector((state) => state.topMovies);
  const random = Math.floor(Math.random() * 247);
  const images = Data.slice(random, random + 2);

  const getData = () => {
    (DATA ? dispatch(getStoredTopMovies()) : dispatch(getTopMovies()));
    (DATA2 ? dispatch(getStoredPopMovies()) : dispatch(getPopMovies()));
    (DATA3 ? dispatch(getStoredPopSeries()) : dispatch(getPopSeries()));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={s.mainContainer}>
      <div className={s.imgContainer}>
        {images.map((item, id) => (
          <img key={id} id={`image-${id + 1}`} src={item.image} alt={images.title} />
        ))}
      </div>
      <div className={s.gradient} />
      <div className={s.textBox}>
        <div className={s.title}>
          <img src={logo} alt="movie disk logo" />
          <div className={s.separator}>|</div>
          <h1>PMDB</h1>
        </div>
        <h3 className={s.subTitle}>Media with Class</h3>
      </div>
      <ScrollLink
        to="in-theaters"
        spy={false}
        smooth={true}
        offset={-50}
        duration={500}
        className={s.explore}
      >
        explore
        <p className={s.arrow} />
      </ScrollLink>
    </div>
  );
}

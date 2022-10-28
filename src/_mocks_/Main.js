/* eslint-disable*/
import React from 'react';
import * as Scroll from 'react-scroll';
import s from './Main.module.css';
import store from './store';

const ScrollLink = Scroll.Link;

export default function Main() {
  const logo = ('./assets/logo02.png');

  const Data = store.topMovies;
  const images = Data.slice(0, 2);

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
      <div className={s.gradient} />
      <div className={s.textBox}>
        <div className={s.title}>
          <img src={logo} alt="movie disk logo" />
          <div className={s.separator}>|</div>
          <h1>PMDB</h1>
        </div>
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

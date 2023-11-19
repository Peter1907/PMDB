import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';
import gsap from 'gsap';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    ['/pop-movies', 'Most Popular Movies Now'],
    ['/top-movies', 'Top 250 Movies of All Time'],
    ['/pop-series', 'Most Popular Series Now'],
    ['/top-series', 'Top 250 Series of All Time'],
  ];
  const popularTitles = [
    ['tt1375666', 'Inception'],
    ['tt0816692', 'Interstellar'],
    ['tt0050083', '12 Angry Men'],
    ['tt11198330', 'House of the Dragon'],
    ['tt0903747', 'Breaking Bad'],
    ['tt7286456', 'Joker'],
  ];

  const handleClick = () => {
    setOpen(!open);
    gsap.to('body', { overflow: open ? 'auto' : 'hidden' });
  };

  const handleItemLink = (url) => {
    setOpen(!open);
    window.location.replace(window.location.origin + url);
  };

  return (
    <div className={s.menuContainer}>
      <button className={s.menuBtn} onClick={() => handleClick()} type="button">
        ||
      </button>
      <div className={`${s.menu} ${open && s.open}`}>
        <div className={s.closeBtn} onClick={() => handleClick()}>
          <p className={s.arrow} />
          <p className={s.line} />
        </div>
        <div className={s.lists}>
          <h1>Quick Access</h1>
          {menuLinks.map((item) => (
            <NavLink key={item[0]} className="link" to={item[0]} onClick={() => handleClick()}>
              {item[1]}
            </NavLink>
          ))}
        </div>
        <div className={s.popular}>
          <h1>Popular Titles</h1>
          {popularTitles.map((item) => (
            <NavLink
              key={item[0]}
              className="link"
              to={`/item-details/${item[0]}`}
              onClick={() => handleItemLink(`/item-details/${item[0]}`)}
            >
              {item[1]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

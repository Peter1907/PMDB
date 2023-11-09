import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

export default function Menu() {
  const [state, setState] = useState(false);
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
    setState(!state);
  };

  const handleItemLink = () => {
    setState(!state);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const menuStyle = state ? { right: 0 } : { right: '-100%' };

  return (
    <div className={s.menuContainer}>
      <button className={s.menuBtn} onClick={() => handleClick()} type="button">
        ||
      </button>
      <div className={s.menu} style={menuStyle}>
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
              onClick={() => handleItemLink()}
            >
              {item[1]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

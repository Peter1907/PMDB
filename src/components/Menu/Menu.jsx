import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

export default function Menu() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const handleItemLink = () => {
    setState(!state);
    setTimeout(() => {
      window.location.reload();
    }, 100)
  };

  const menuStyle = (state) ? { right: 0 } : { right: '-100%' };

  return (
    <div className={s.menuContainer}>
      <button
        className={s.menuBtn}
        onClick={() => handleClick()}
        type="button"
      >
        ||
      </button>
      <div className={s.menu} style={menuStyle}>
        <div className={s.closeBtn} onClick={() => handleClick()}>
          <p className={s.arrow} />
          <p className={s.line} />
        </div>
        <div className={s.lists}>
          <h1>Quick Access</h1>
          <NavLink
            className="link"
            to="/pop-movies"
            onClick={() => handleClick()}
          >
            Most Popular Movies Now
          </NavLink>
          <NavLink
            className="link"
            to="/top-movies"
            onClick={() => handleClick()}
          >
            Top 250 Movies of All Time
          </NavLink>
          <NavLink
            className="link"
            to="/pop-series"
            onClick={() => handleClick()}
          >
            Most Popular Series Now
          </NavLink>
          <NavLink
            className="link"
            to="/top-series"
            onClick={() => handleClick()}
          >
            Top 250 Series of All Time
          </NavLink>
        </div>
        <div className={s.popular}>
          <h1>Popular Titles</h1>
          <NavLink
            className="link"
            to="/item-details/tt1375666"
            onClick={() => handleItemLink()}
          >
            Inception
          </NavLink>
          <NavLink
            className="link"
            to="/item-details/tt0816692"
            onClick={() => handleItemLink()}
          >
            Interstellar
          </NavLink>
          <NavLink
            className="link"
            to="/item-details/tt0050083"
            onClick={() => handleItemLink()}
          >
            12 Angry Men
          </NavLink>
          <NavLink
            className="link"
            to="/item-details/tt11198330"
            onClick={() => handleItemLink()}
          >
            House of the Dragon
          </NavLink>
          <NavLink
            className="link"
            to="/item-details/tt0903747"
            onClick={() => handleItemLink()}
          >
            Breaking Bad
          </NavLink>
          <NavLink
            className="link"
            to="/item-details/tt0944947"
            onClick={() => handleItemLink()}
          >
            Game of Thrones
          </NavLink>
        </div>
      </div>
    </div>
  );
}

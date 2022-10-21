/* eslint-disable*/
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const NavBar = () => (
  <BrowserRouter>
    <header className={s.header}>
      <Link className={s.homeLink} to="/">
        <h2 className={s.title}>PMDB</h2>
      </Link>
      <NavLink className="link one" to="/top-movies">Top Movies</NavLink>
      <NavLink className="link" to="/top-series">Top Series</NavLink>
      <NavLink className="link" to="/pop-movies">Popular Movies</NavLink>
      <NavLink className="link" to="/pop-series">Popular Series</NavLink>
    </header>
  </BrowserRouter>
);

export default NavBar;

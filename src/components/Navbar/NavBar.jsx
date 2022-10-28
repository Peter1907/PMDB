import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import s from './Navbar.module.css';

const NavBar = () => (
  <header className={s.header}>
    <Link className={s.homeLink} to="/">
      <h2 className={s.title}>PMDB</h2>
    </Link>
    <Menu />
  </header>
);

export default NavBar;

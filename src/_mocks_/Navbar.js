import { BrowserRouter, Link } from 'react-router-dom';
import Menu from './menu';
import s from './Navbar.module.css';

const NavBar = () => (
  <BrowserRouter>
    <header className={s.header}>
      <Link className={s.homeLink} to="/">
        <h2 className={s.title}>PMDB</h2>
      </Link>
      <Menu />
    </header>
  </BrowserRouter>
);

export default NavBar;

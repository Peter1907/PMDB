// import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const NavBar = () => {
  // const Image = ('./assets/planet.png');

  return (
    <header className={s.header}>
      <h2 className={s.title}>PMDB</h2>
    </header>
  );
};

export default NavBar;

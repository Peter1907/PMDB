import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InTheaters from '../components/InTheaters/InTheaters';
import Main from '../components/Main/Main';
import Rack from '../components/Rack/Rack';

export default function Home() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="home">
      <Main />
      <InTheaters />
      <div className="racks">
        <h1 className="header">What to watch</h1>
        <div className="movies-rack">
          <div className="rack-head">
            <h1>|</h1>
            <h2>Popular Movies</h2>
            <p className="arrow" />
            <Link to="/pop-movies" className="page-link">
              Browse All...
            </Link>
          </div>
          <div className="rack">
            <Rack type={'movies'} />
          </div>
        </div>
        <div className="series-rack">
          <div className="rack-head">
            <h1>|</h1>
            <h2>Popular Series</h2>
            <p className="arrow" />
            <Link to="/pop-series" className="page-link">
              Browse All...
            </Link>
          </div>
          <div className="rack">
            <Rack type={'series'} />
          </div>
        </div>
      </div>
    </div>
  )
}

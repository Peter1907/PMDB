import { useEffect } from 'react';
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
          </div>
          <div className="rack">
            <Rack type={'series'} />
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import s from './Rack.module.css';
import store from './store';

const ScrollLink = Scroll.Link;

export default function Rack({ type }) {
  const saveIcon = ('../assets/add.png');
  const starIcon = ('../assets/star.png');
  const Data1 = store.details;
  const Data2 = store.popMovies;
  const Data3 = store.popSeries;
  const options = {
    'similar': Data1.similars,
    'movies': Data2,
    'series': Data3,
  };
  const selection = options[type];

  const refresh = () => {
    setTimeout(() => {
      document.location.reload();
    }, 100)
  };

  return (
    <div className={s.rack}>
      {(selection)
        && <div id={`${type}-rows`} className={s.rows}>
          <div name={`${type}-row1`} className={s.row1}>
            {selection.slice(0, 4).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <img className={s.poster} src={item.image} alt="poster" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh()} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">Add to Watchlist</button>
                </div>
              </div>
            ))}
          </div>
          <div name={`${type}-row2`} className={s.row2}>
            {selection.slice(4, 8).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <img className={s.poster} src={item.image} alt="poster" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh()} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">Add to Watchlist</button>
                </div>
              </div>
            ))}
          </div>
          <div name={`${type}-row3`} className={s.row3}>
            {selection.slice(8, 12).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <img className={s.poster} src={item.image} alt="poster" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh()} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">Add to Watchlist</button>
                </div>
              </div>
            ))}
          </div>
        </div>}
      <div className={s.dotsContainer}>
        <ScrollLink
          to={`${type}-row1`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={s.dot}
        >
        </ScrollLink>
        <ScrollLink
          to={`${type}-row2`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={s.dot}
        >
        </ScrollLink>
        <ScrollLink
          to={`${type}-row3`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={s.dot}
        >
        </ScrollLink>
      </div>
    </div>
  );
}

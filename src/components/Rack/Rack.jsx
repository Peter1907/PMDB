import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import s from './Rack.module.css';
import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

const ScrollLink = Scroll.Link;

export default function Rack({ type }) {
  const saveIcon = '../assets/add.png';
  const starIcon = '../assets/star.png';
  const Data1 = useSelector((state) => state.details);
  const Data2 = useSelector((state) => state.popMovies);
  const Data3 = useSelector((state) => state.popSeries);
  const options = {
    similar: Data1.similars,
    movies: Data2,
    series: Data3,
  };
  const selection = options[type];

  const refresh = (url) => {
    window.location.replace(window.location.origin + url);
  };

  const activateDot = (e) => {
    const dots = e.target.parentNode.childNodes;
    dots.forEach((dot) => {
      dot.classList.remove(`${s.active}`);
    });
    e.target.classList.add(`${s.active}`);
  };

  return (
    <div className={s.rack} onLoad={() => Scroll.scroller.scrollTo(0, 0)}>
      {selection && (
        <div id={`${type}-rows`} className={s.rows}>
          <div name={`${type}-row1`} className={s.row1}>
            {selection.slice(0, 4).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <ImgPlaceholder key={id} alt="poster" src={item.image} orientation="v" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh(`/item-details/${item.id}`)} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div name={`${type}-row2`} className={s.row2}>
            {selection.slice(4, 8).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <ImgPlaceholder key={id} alt="poster" src={item.image} orientation="v" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh(`/item-details/${item.id}`)} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div name={`${type}-row3`} className={s.row3}>
            {selection.slice(8, 12).map((item, id) => (
              <div key={id} className={s.item}>
                <div className={s.posterContainer}>
                  <img className={s.saveTag} src={saveIcon} alt="#" />
                  <ImgPlaceholder key={id} alt="poster" src={item.image} orientation="v" />
                </div>
                <div className={s.info}>
                  <Link onClick={() => refresh(`/item-details/${item.id}`)} to={`/item-details/${item.id}`}>
                    <h3 className={s.title}>{item.title}</h3>
                  </Link>
                  <div className={s.ratingContainer}>
                    <p className={s.rating}>
                      <img src={starIcon} className={s.star} alt="star shaped icon" />
                      {item.imDbRating}
                    </p>
                  </div>
                  <button className={s.btn} type="button">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={s.dotsContainer}>
        <ScrollLink
          to={`${type}-row1`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={`${s.dot} ${s.active}`}
          onClick={(e) => activateDot(e)}
        />
        <ScrollLink
          to={`${type}-row2`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={s.dot}
          onClick={(e) => activateDot(e)}
        />
        <ScrollLink
          to={`${type}-row3`}
          containerId={`${type}-rows`}
          spy={false}
          smooth={true}
          offset={50}
          duration={300}
          className={s.dot}
          onClick={(e) => activateDot(e)}
        />
      </div>
    </div>
  );
}

Rack.propTypes = {
  type: PropTypes.string.isRequired,
};

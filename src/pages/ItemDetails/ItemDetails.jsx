import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rack from '../../components/Rack/Rack';
import { getDetails, getStoredDetails } from '../../components/Redux/details/details';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import s from './ItemDetails.module.css';
import Placeholder from '../../components/Placeholder/Placeholder';

export default function ItemDetails() {
  const star = '../assets/star.png';
  const saveIcon = '../assets/add.png';
  const playIcon = '../assets/play.png';
  const background = '../assets/img.jpg';
  const dispatch = useDispatch();
  const { id } = useParams();

  const Data = useSelector((state) => state.details);
  const storedData = sessionStorage.getItem(`D_${id}`);

  useEffect(() => {
    storedData ? dispatch(getStoredDetails(id)) : dispatch(getDetails(id));
    window.scrollTo(0, 0);
  }, [dispatch, id, storedData]);

  return (
    <div className={s.detailsContainer}>
      <img className={s.background} src={background} alt="movie disks" />
      <div className={s.main}>
        <div className={s.name}>
          <div className={s.header}>{Data.title}</div>
          {Data.title && (
            <div className={s.subHeader}>
              {Data.type} &spades; {Data.year} &spades; {`${Data.contentRating} `}
              {Data.runtimeStr && <>&spades; {Data.runtimeStr}</>}
            </div>
          )}
        </div>
        <div className={s.rating}>
          <p className={s.rTitle}>Rating</p>
          <div>
            <img src={star} className={s.star} alt="star shaped icon" />
            <div className={s.rate}>
              <p className={s.score}>
                <strong>{Data.imDbRating}</strong>/10
              </p>
              <br />
              <p className={s.votes}>({Data.imDbRatingVotes})</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.pictures}>
        <div className={s.posterContainer}>
          <img className={s.saveTag} src={saveIcon} alt="#" />
          <Placeholder alt="poster" src={Data.image} orientation="v" />
        </div>
        <div className={s.thumbnailContainer}>
          <Thumbnail id={id} type={'new'} />
          <p className={s.playTrailer}>
            <img src={playIcon} className={s.playButton} alt="play button" />
            watch trailer
          </p>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.left}>
          {Data.genreList && (
            <ul className={s.genres}>
              {Data.genreList.map((genre, id) => (
                <li className={s.genre} key={id}>
                  {genre.value}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <p className={s.plot}>{Data.plot}</p>
          <hr />
          <div className={s.creators}>
            <h3 className={s.cTitle}>Creators:</h3>
            {Data.tvSeriesInfo && <p>{Data.tvSeriesInfo.creators}</p>}
            {Data.writerList && <p>{Data.writers}</p>}
          </div>
          <hr />
          <div className={s.stars}>
            <h3 className={s.sTitle}>Stars:</h3>
            <p>{Data.stars}</p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.awards}>
            <h3 className={s.awardsT}>Awards:</h3>
            <p>{Data.awards === '' ? 'none yet' : Data.awards}</p>
          </div>
          <hr />
          <div className={s.releaseDate}>
            <h3 className={s.releaseDateT}>Release Date:</h3>
            <p>{Data.releaseDate}</p>
          </div>
          <hr />
          <div className={s.companies}>
            <h3 className={s.companiesT}>Companies:</h3>
            <p>{Data.companies}</p>
          </div>
          <hr />
          <div className={s.countries}>
            <h3 className={s.countriesT}>Countries:</h3>
            <p>{Data.countries}</p>
          </div>
        </div>
      </div>
      <div className={s.cast}>
        <div className={s.castHead}>
          <h1>|</h1>
          <h2>Top Cast</h2>
          <p className={s.arrow}></p>
        </div>
        {Data.actorList && (
          <div className={s.castList}>
            {Data.actorList.map((actor) => (
              <div key={actor.id} className={s.actor}>
                <div className={s.actorImg}>
                  <Placeholder alt="actor" src={actor.image} orientation="v" />
                </div>
                <div className={s.actorInfo}>
                  <h3>{actor.name}</h3>
                  <p>{actor.asCharacter}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={s.rackContainer}>
        <div className={s.rackHead}>
          <h1>|</h1>
          <h2>More like this</h2>
          <p className={s.arrow}></p>
        </div>
        <Rack type={'similar'} />
      </div>
    </div>
  );
}

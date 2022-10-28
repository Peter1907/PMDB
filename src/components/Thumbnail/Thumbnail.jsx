import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoredTrailer, getTrailer } from '../Redux/trailer/trailer';
import s from './Thumbnail.module.css';

const Thumbnail = ({ id, type }) => {
  const dispatch = useDispatch();
  const storedTrailer = localStorage.getItem(`T_${id}`);
  const trailerInfo = useSelector((state) => state.trailer);

  useEffect(() => {
    (storedTrailer) ? dispatch(getStoredTrailer(id)) : dispatch(getTrailer(id));
  }, [dispatch, id, storedTrailer]);

  const thStyle = type ? { position: 'static' } : { position: 'absolute' };

  return (
    <React.Fragment>
      <img
        src={trailerInfo.thumbnailUrl}
        alt="thumbnail"
        className={s.thumbnail}
        style={thStyle}
      />
    </React.Fragment>
  );
};

export default Thumbnail;

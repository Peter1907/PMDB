import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoredTrailer, getTrailer } from '../Redux/trailer/trailer';
import s from './Thumbnail.module.css';
import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

const Thumbnail = ({ id }) => {
  const dispatch = useDispatch();
  const storedTrailer = sessionStorage.getItem(`T_${id}`);
  const trailerInfo = useSelector((state) => state.trailer);

  useEffect(() => {
    storedTrailer ? dispatch(getStoredTrailer(id)) : dispatch(getTrailer(id));
  }, [dispatch, id, storedTrailer]);

  return (
    <div className={s.thumbnail}>
      <ImgPlaceholder src={trailerInfo.thumbnailUrl} alt="thumbnail" orientation="h" />
    </div>
  );
};

export default Thumbnail;

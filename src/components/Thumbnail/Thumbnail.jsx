/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoredTrailer, getTrailer } from '../Redux/trailer/trailer';
import s from './Thumbnail.module.css';

const Thumbnail = ({ id }) => {
  const dispatch = useDispatch();
  const storedTrailer = localStorage.getItem(`T_${id}`);
  const trailerInfo = useSelector((state) => state.trailer);

  const getData = () => {
    (storedTrailer) ? dispatch(getStoredTrailer(id)) : dispatch(getTrailer(id))
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <img src={trailerInfo.thumbnailUrl} alt="thumbnail" className={s.thumbnail} />
    </React.Fragment>
  );
};

export default Thumbnail;

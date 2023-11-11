import { useRef, useState } from 'react';
import gsap from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import s from './placeholder.module.css';
import LoadingLogo from './LoadingLogo';

export default function Placeholder({ src, alt, orientation }) {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef(null);

  const showMainImg = () => {
    gsap.to(imgRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.out',
    });
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className={s.placeholderContainer}>
          <img
            className={s.placeholderImg}
            src={`/assets/placeholder_${orientation}.png`}
            alt="placeholder"
          />
          <LoadingLogo />
        </div>
      )}
      <div className={s.mainImgContainer} ref={imgRef}>
        <LazyLoadImage className={s.mainImg} src={src} alt={alt} onLoad={() => showMainImg()} />
      </div>
    </>
  );
}

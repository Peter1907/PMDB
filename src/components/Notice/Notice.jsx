import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import s from './notice.module.css';

export default function Notice() {
  const [open, setOpen] = useState(true);
  const noticeRef = useRef(null);

  useEffect(() => {
    gsap.from(noticeRef.current, { y: -130, duration: 0.5, ease: 'power1.out' });
  }, [open]);

  const removeNotice = () => {
    gsap.to(noticeRef.current, { y: -130, duration: 0.5, ease: 'power1.out', onComplete: () => setOpen(false) });
  };

  return (
    open && (
      <div className={s.noticeContainer} ref={noticeRef}>
        <svg
          className={s.svg}
          xmlns="http://www.w3.org/2000/svg"
          height="3.5rem"
          viewBox="0 0 512 512"
        >
          {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path
            fill="#222831"
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
            id="path3004"
          />
          <path
            fill="#eee"
            d="m 248.84849,318.35044 c -5.26333,-1.62136 -11.6014,-7.22313 -14.28509,-12.62557 l -2.11052,-4.24863 v -61.45306 -61.45306 l 2.04821,-4.15788 c 3.93827,-7.99468 13.27081,-14.09991 21.55333,-14.09991 8.16724,0 17.46817,6.07997 21.04215,13.75515 l 2.09667,4.50264 v 61.45306 61.45306 l -2.09667,4.50265 c -2.61615,5.61821 -8.4619,10.71667 -14.26257,12.43927 -5.3858,1.59941 -8.62449,1.58373 -13.98551,-0.0677 z"
            id="path1493"
          />
          <path
            fill="#eee"
            d="m 250.69984,415.02983 c -9.38413,-1.59114 -18.2921,-8.16596 -22.51818,-16.62029 -2.80772,-5.61688 -3.45639,-8.4904 -3.4074,-15.09433 0.0848,-11.42756 7.21394,-22.51906 17.82329,-27.72928 4.38773,-2.15481 6.02596,-2.45349 13.45687,-2.45349 7.45973,0 9.0606,0.29448 13.52865,2.48861 6.60564,3.24384 13.35337,10.60989 15.87596,17.33075 2.66564,7.10197 2.24014,17.32953 -1.00958,24.26653 -5.87659,12.54443 -20.20753,20.10765 -33.74961,17.8115 z"
            id="path1495"
          />
        </svg>
        <p className={s.notice}>
          The available data does not cover all titles. This is a placeholder template for titles
          with no data. You can try any item on the menu for a full experience.
        </p>
        <button className={s.btn} onClick={removeNotice}>
          Got it!
        </button>
      </div>
    )
  );
}

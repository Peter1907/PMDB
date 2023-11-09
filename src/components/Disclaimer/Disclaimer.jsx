import { useRef, useState } from 'react';
import gsap from 'gsap';
import s from './disclaimer.module.css';
import DisclaimerSvg from './DisclaimerSvg';

export default function Disclaimer() {
  const [rendered, setRendered] = useState(true);
  const [open, setOpen] = useState(false);
  const [containerRef, textRef, btnRef] = [useRef(null), useRef(null), useRef(null)];
  const primaryColor = open ? '#222831' : '#ffd369';
  const secondaryColor = open ? '#ffd369' : '#222831';

  const openMsg = () => {
    gsap.to(containerRef.current, {
      left: '50%',
      transform: 'translate(-50%)',
      backgroundColor: '#ffd369',
      duration: 0.5,
      onComplete: () => {
        setOpen(true);
        gsap.to(textRef.current, {
          display: 'block',
          onComplete: () => {
            gsap.to(textRef.current, {
              width: '760px',
              duration: 0.5,
              onComplete: () => {
                gsap.to(textRef.current, { height: 'auto', opacity: 1, duration: 0.5 });
              },
            });
            btnRef.current.style.display = 'block';
          },
        });
      },
    });
  };

  const closeMessage = () => {
    gsap.to(containerRef.current, {
      bottom: '-15rem',
      duration: 1,
      onComplete: () => {
        setRendered(false);
      },
    });
  };

  return (
    <>
      {rendered && (
        <div className={s.disclaimer} ref={containerRef}>
          <DisclaimerSvg
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            open={() => openMsg(true)}
          />
          <p className={s.text} ref={textRef}>
            This website uses a sample of old data from the IMDb API. The data is not being updated
            and is only used for <strong>NON-COMMERICAL</strong> demonstration purposes. <br />
            <em>ALL RIGHTS RESERVED TO IMDb</em>.
          </p>
          <button className={s.close} ref={btnRef} onClick={closeMessage}>
            x
          </button>
        </div>
      )}
    </>
  );
}

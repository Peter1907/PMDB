import { useState } from 'react';
import s from './disclaimer.module.css';
import DisclaimerSvg from './DisclaimerSvg';

export default function Disclaimer() {
  const [open, setOpen] = useState(false);
  const primaryColor = open ? '#222831' : '#ffd369';
  const secondaryColor = open ? '#ffd369' : '#222831';

  return (
    <div className={s.disclaimer}>
      <DisclaimerSvg
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        open={() => setOpen(true)}
      />
      <p>
        This website uses a sample of old data from the IMDb API. The data is not being updated and
        is only used for <strong>NON-COMMERICAL</strong> demonstration purposes. <br />
        <em>ALL RIGHTS RESERVED TO IMDb</em>.
      </p>
      <button className={s.close} onClick={() => setOpen(false)}>x</button>
    </div>
  );
}

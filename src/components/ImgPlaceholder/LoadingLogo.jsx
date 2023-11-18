import s from './ImgPlaceholder.module.css';

export default function LoadingLogo() {
  return (
    <div className={s.animationBox}>
      <div className={s.lightBox} />
    </div>
  );
}

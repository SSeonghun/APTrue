import style from './ApartCard.module.scss';

const data = {
  aptname: 'SSAFY Apt',
  aptImg: 'https://picsum.photos/200/300', // 이미지 크기 지정
  location: '광주광역시 하남산단로 133',
  block: 2,
  household: 10,
};

export default function ApartCard() {
  // location을 분리하는 로직
  const [city, ...rest] = data.location.split(' ');
  const restLocation = rest.join(' ');

  return (
    <div className={style.card}>
      <img src={data.aptImg} alt={data.aptname} className={style.image} />
      <div className={style.textContainer}>
        <p className={style.title}>{data.aptname}</p>
        <p className={style.location}>
          <p className={style.city}>{city}</p>{' '}
          <p className={style.restLocation}>{restLocation}</p>
        </p>
        <p className={style.details}>
          <span>총 {data.household}세대</span>, <span>{data.block}동</span>
        </p>
      </div>
    </div>
  );
}

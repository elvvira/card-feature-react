import style from './card.module.scss';

const Cards = ({title,info,icon}) => {
	return (
		<div className={style.container}>
			<h3 className={style.title}>{title}</h3>
			<p className={style.subtitle}>{info}</p>
			<div className={style.image}>
				<img src={icon} alt='' />
			</div>
		</div>
	);
};
export default Cards;

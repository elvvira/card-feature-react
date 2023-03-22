import { CardsInfo } from '../../constants/cards-info.js';
import Cards from '../cards/Cards';
import style from './main.module.scss';



const Main = () => {
	return (
		<div className={style.main}>
			<header className={style.container}>
				<h1 className={style.title}>Reliable, efficient delivery</h1>
				<h2 className={style.subtitle}>Powered by Technology</h2>
				<p className={style.text}>
					Our Artificial Intelligence powered tools use millions of project data
					points to ensure that your project is successful
				</p>
			</header>
            <div className={style.card}>
			{CardsInfo.map(card => {
				return <Cards key={card.id} {...card} />;
			})}

            </div>
		</div>
	);
};
export default Main;

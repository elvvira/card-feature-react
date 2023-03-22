import { v4 } from 'uuid';

const CardsInfo = [
	{
		id: v4(),
		title: 'Supervisor',
		info: 'Monitors activity to identify project roadblocks',
		icon: '/public/images/icon-supervisor.svg'
	},
	{
		id: v4(),
		title: 'Team Builder',
		info: 'Scans our talent network to create the optimal team for your project',
		icon: '/public/images/icon-team-builder.svg'
	},
	{
		id: v4(),
		title: 'Karma',
		info: 'Regularly evaluates our talent to ensure quality',
		icon: '/public/images/icon-karma.svg'
	},
	{
		id: v4(),
		title: 'Calculator',
		info: 'Uses data from past projects to provide better delivery estimates',
		icon: '/public/images/icon-calculator.svg'
	}
];
export { CardsInfo };

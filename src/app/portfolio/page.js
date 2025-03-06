'use client';
import './../global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import Lander from '@/app/components/PortfolioPage/Lander';
import Cta from '@/app/components/AboutPage/Cta';
import PortfolioGrid from '@/app/components/PortfolioPage/PortfolioGrid';

const page = () => {
	return (
		<div style={{ width: '90vw' }}>
			<Lander />
			<PortfolioGrid />
			<Cta />
		</div>
	);
};

export default page;

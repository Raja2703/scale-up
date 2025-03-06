'use client';
import './../global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import Lander from '@/app/components/ServicesPage/Lander';
import Intro from '@/app/components/ServicesPage/Intro';
import Marquee from '@/app/components/HomePage/Marquee';
import WhatWeOffer from '@/app/components/ServicesPage/WhatWeOffer';
import HowWeMake from '@/app/components/ServicesPage/HowWeMake';
import Steps from '@/app/components/ServicesPage/Steps';
import WhatMakesUsBest from '@/app/components/ServicesPage/WhatMakesUsBest';
import Offer from '@/app/components/ServicesPage/Offer';
import Cta from '@/app/components/ServicesPage/Cta';

const page = () => {
	return (
		<div style={{ width: '90vw' }}>
			<Lander />
			<Intro />
			<Marquee />
			<WhatWeOffer />
			<HowWeMake />
			<Steps />
			<WhatMakesUsBest />
			<Offer />
			<Cta />
		</div>
	);
};

export default page;

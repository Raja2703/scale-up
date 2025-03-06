'use client';
import './../global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import Lander from '@/app/components/AboutPage/Lander';
import About from '@/app/components/AboutPage/About';
import Team from '@/app/components/AboutPage/Team';
import Service from '@/app/components/AboutPage/Service';
import Passion from '@/app/components/AboutPage/Passion';
import WhatMakesUsBest from '@/app/components/AboutPage/WhatMakesUsBest';
import Cta from '@/app/components/AboutPage/Cta';

export default function page() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Lander />
			<div style={{ width: '85vw' }}>
				<About />
				<Team />
				<Service />
				<Passion />
				<WhatMakesUsBest />
				<Cta />
			</div>
		</div>
	);
}

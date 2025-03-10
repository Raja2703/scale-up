'use client';
import './../global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import React from 'react';
import Lander from '@/app/components/GetInTouchPage/Lander';
import About from '@/app/components/GetInTouchPage/About';
import LetsTalk from '@/app/components/GetInTouchPage/LetsTalk';
import Map from '@/app/components/GetInTouchPage/Map';
import CtaForm from '@/app/components/GetInTouchPage/CtaForm';

const page = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Lander />
			<div style={{ width: '90vw' }}>
				<About />
				<LetsTalk />
				<Map />
				<CtaForm />
			</div>
		</div>
	);
};

export default page;

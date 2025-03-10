'use client';
import './../global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import Lander from '@/app/components/CareerPage/Lander';
import JobOpening from '@/app/components/CareerPage/JobOpening';
import CtaForm from '@/app/components/CareerPage/CtaForm';

import React from 'react';

const page = () => {
	return (
		<div>
			<Lander />
			<JobOpening />
			<CtaForm />
		</div>
	);
};

export default page;

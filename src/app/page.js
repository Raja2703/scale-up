'use client';
import './global.css';
import '@/app/styles/main.min.css';
import '@/app/styles/style.css';
import '@/app/styles/stg.css';
import '@/app/styles/libs.css';
import '@/app/styles/responsive.css';
import '@/app/styles/stylus.css';
import '@/app/styles/config.css';
import Hero from '@/app/components/HomePage/Hero';
import About from '@/app/components/HomePage/AboutUs';
import Marquee from '@/app/components/HomePage/Marquee';
import Steps from '@/app/components/HomePage/Steps';
import Services from '@/app/components/HomePage/Services';
import WhyChooseUs from '@/app/components/HomePage/WhyChooseUs';
import Counters from '@/app/components/HomePage/Counters';
import Portfolio from '@/app/components/HomePage/Portfolio';
import Testimonials from '@/app/components/HomePage/Testimonials';
import Partner from '@/app/components/HomePage/Partner';
import Footer from '@/app/components/Footer';

export default function Home() {
	return (
		<div style={{ width: '100vw' }}>
			<div className="stg-container" style={{ width: '90vw' }}>
				<Hero />
				<About />
				<Marquee />
				<Steps />
				<Services />
				<WhyChooseUs />
				<Counters />
				<Portfolio />
				<Testimonials />
				<Partner />
			</div>
			{/* <Footer /> */}
		</div>
	);
}

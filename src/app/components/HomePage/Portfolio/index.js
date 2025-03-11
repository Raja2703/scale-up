import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const portfolioItems = [
	{
		title: 'CRM SaaS Dashboard',
		name: 'OZI Fleet',
		image: '/img/portfolio/portfolio01.jpg',
		link: 'portfolio-post01.html',
	},
	{
		title: 'Mobile Application',
		name: 'Seven Eleven',
		image: '/img/portfolio/portfolio02.jpg',
		link: 'portfolio-post02.html',
	},
	{
		title: 'Website Development',
		name: 'Saliah Foods',
		image: '/img/portfolio/portfolio03.jpg',
		link: 'portfolio-post03.html',
	},
	{
		title: 'UI/UX',
		name: 'Lead Hub',
		image: '/img/portfolio/portfolio04.jpg',
		link: 'portfolio-post04.html',
	},
];

const Index = () => {
	const { scrollYProgress } = useScroll();

	// Parallax Effect only on Right Side
	const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

	return (
		<section className="hide-on-mobile-tab">
			<div className="stg-row stg-large-gap" style={{ position: 'relative' }}>
				{/* Left Side - Stays Fixed */}
				<div className="stg-col-6">
					<div
						className="bringer-sticky-block"
						style={{
							position: 'sticky',
							top: '20%',
							height: '100vh',
						}}
					>
						<h2>Our Portfolio</h2>
						<p className="bringer-large-text">We are proud of our work, and we are always looking for new challenges. Take a look at some of our recent creative portfolio works.</p>
						<div className="align-right">
							<a href="portfolio.html" className="bringer-arrow-link" style={{ backgroundColor: 'transparent' }}>
								Explore full Portfolio
							</a>
						</div>
					</div>
				</div>

				{/* Right Side - Scrolls with Motion */}
				<div className="stg-col-6" style={{ height: '100%', overflow: 'hidden' }}>
					<motion.div style={{ y: yTransform }}>
						<div className="bringer-grid-1col bringer-tp-grid-2cols stg-normal-gap bringer-parallax-media">
							{portfolioItems.map((item, index) => (
								<div key={index} className="bringer-block bringer-portfolio-card">
									<div className="bringer-portfolio-card-image">
										<Image className="bringer-lazy" src={item.image} alt={item.name} width={1200} height={1200} />
									</div>
									<div className="bringer-portfolio-card-footer">
										<div className="bringer-portfolio-card-title">
											<span className="bringer-meta">{item.title}</span>
											<h6>{item.name}</h6>
										</div>
										<span className="bringer-icon bringer-icon-explore"></span>
									</div>
									<a href={item.link} style={{ backgroundColor: 'transparent' }} aria-label={`View details of ${item.name}`}></a>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Index;

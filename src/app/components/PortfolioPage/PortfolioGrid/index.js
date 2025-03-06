import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
	{ id: 1, category: 'CRM SaaS Dashboard', title: 'OZI Fleet', image: '/img/portfolio/portfolio01.jpg' },
	{ id: 2, category: 'Mobile Application', title: 'Seven Eleven', image: '/img/portfolio/portfolio02.jpg' },
	{ id: 3, category: 'Website Development', title: 'Saliah Foods', image: '/img/portfolio/portfolio03.jpg' },
	{ id: 4, category: 'UI/UX', title: 'Leads Hub', image: '/img/portfolio/portfolio04.jpg' },
	{ id: 5, category: 'SEO', title: 'BlackBull Trans', image: '/img/portfolio/portfolio05.jpg' },
	{ id: 6, category: 'SaaS Product', title: 'Simply Tap It', image: '/img/portfolio/portfolio06.jpg' },
	{ id: 7, category: 'Driver Application', title: 'OZI Driver', image: '/img/portfolio/portfolio07.jpg' },
	{ id: 8, category: 'Branding', title: 'OZI', image: '/img/portfolio/portfolio08.jpg' },
	{ id: 9, category: 'eCommerce Mobile App', title: 'Open Fashion', image: '/img/portfolio/portfolio09.jpg' },
];

const PortfolioGrid = () => {
	return (
		<section>
			<div className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-centered-last-item stg-normal-gap bringer-parallax-media">
				{portfolioItems.map((item, index) => (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
						viewport={{ once: true }}
						key={item.id}
						className="bringer-block bringer-portfolio-card"
					>
						<div className="bringer-portfolio-card-image">
							<Image className="bringer-lazy" src={item.image} alt={item.title} width="1200" height="1200" />
						</div>
						<div className="bringer-portfolio-card-footer">
							<div className="bringer-portfolio-card-title">
								<span className="bringer-meta">{item.category}</span>
								<h6>{item.title}</h6>
							</div>
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="portfolio-post02.html"></Link>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default PortfolioGrid;

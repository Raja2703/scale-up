import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	const services = [
		{ title: 'Mobile Application Development', description: 'Crafting intuitive and high-performance apps for seamless user experiences.' },
		{ title: 'Website Development', description: 'Creating responsive and dynamic platforms to amplify your online presence.' },
		{ title: 'SEO and Email Marketing', description: 'Enhancing digital visibility and engagement with effective strategies.' },
		{ title: 'Custom Software Development', description: 'Tailoring scalable solutions to streamline operations and drive innovation.' },
		{ title: 'Custom API and Integration', description: 'Developing and integrating APIs to optimize your business processes.' },
		{ title: 'Software Testing', description: 'Ensuring robust and reliable software performance through rigorous testing.' },
		{ title: 'UI/UX', description: 'Designing interfaces that enhance user satisfaction and interaction.' },
		{ title: 'E-commerce Solutions', description: 'Building tailored online stores to boost sales and customer experience.' },
	];

	const technologies = [
		{ src: '/img/partners/Hire-Ruby-on-Rails-Developer.svg', alt: 'Ruby-on-Rails-Developer' },
		{ src: '/img/partners/Python Developer.svg', alt: 'Python-Developer' },
		{ src: '/img/partners/Laravel-Developer.svg', alt: 'Laravel-Developer' },
		{ src: '/img/partners/Figma.svg', alt: 'Figma-Designer' },
		{ src: '/img/partners/React-Developer.svg', alt: 'React-Developer' },
		{ src: '/img/partners/PHP-Developer.svg', alt: 'PHP-Developer' },
		{ src: '/img/partners/Android-Developer.svg', alt: 'Android-Developer' },
		{ src: '/img/partners/Next-JS.svg', alt: 'Next-JS' },
		{ src: '/img/partners/Flutter.svg', alt: 'Flutter' },
		{ src: '/img/partners/Node-Js.svg', alt: 'Node-Js' },
		{ src: '/img/partners/Angular-JS.svg', alt: 'Angular-JS' },
		{ src: '/img/partners/Apple-iOS.svg', alt: 'Apple-iOS' },
	];

	return (
		// <!-- Section: What Do I Offer -->
		<section className="backlight-bottom">
			{/* <!-- Section Title --> */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
							What We Offer
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							Unleashing the full spectrum of magic.
						</motion.p>
					</div>
				</div>
			</div>
			{/* <!-- Services Grid --> */}
			<div className="bringer-grid-3cols bringer-tp-grid-2cols">
				{services.map((service, index) => (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true }}
						key={index}
						className="bringer-block stg-aspect-square stg-vertical-space-between"
					>
						<h5>
							{service.title}
							<span className="bringer-accent">.</span>
						</h5>
						<p>{service.description}</p>
					</motion.div>
				))}

				<div className="bringer-masked-block bringer-grid-more-masked">
					<div className="bringer-block stg-aspect-square stg-vertical-space-between is-accented bringer-masked-media">
						<h5>
							Get in Touch<span className="bringer-accent">.</span>
						</h5>
						<p>Send us a message now and ignite your brand's journey to unparalleled success!</p>
					</div>
					<div className="bringer-masked-content at-bottom-right">
						<span className="bringer-square-button is-secondary">
							<span className="bringer-icon bringer-icon-explore"></span>
						</span>
					</div>
					<Link href="contact-us.html" style={{ backgroundColor: 'transparent' }}></Link>
				</div>
			</div>

			{/* <!-- Partners Section --> */}
			<div className="bringer-partners partner-section">
				<span className="bringer-label">Technologies we work on.</span>
				<div className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s">
					{technologies.map((tech, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: (index % 6) * 0.2 }}
							viewport={{ once: true }}
							key={index}
							className="bringer-block bringer-center"
						>
							<Image width={100} height={100} style={{ height: '6rem' }} src={tech.src} alt={tech.alt} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default index;
